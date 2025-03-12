
import { useState, useEffect } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Column } from "./Column";
import { Task } from "./Task";
import { Board as BoardType, Task as TaskType } from "@/types/kanban";
import { kanbanService } from "@/services/kanban-service";
import { toast } from "@/hooks/use-toast";

export function KanbanBoard() {
  const [board, setBoard] = useState<BoardType>(kanbanService.getBoard());
  const [activeTask, setActiveTask] = useState<TaskType | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const taskId = active.id as string;
    
    // Find the dragged task
    for (const column of board.columns) {
      const task = column.tasks.find(t => t.id === taskId);
      if (task) {
        setActiveTask(task);
        break;
      }
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    
    if (!over) return;
    
    const activeId = active.id as string;
    const overId = over.id as string;
    
    // Find source column
    let sourceColumnId = "";
    let sourceTaskIndex = -1;
    
    for (const column of board.columns) {
      const taskIndex = column.tasks.findIndex(task => task.id === activeId);
      if (taskIndex !== -1) {
        sourceColumnId = column.id;
        sourceTaskIndex = taskIndex;
        break;
      }
    }
    
    // Check if we're over a column
    const overColumn = board.columns.find(column => column.id === overId);
    
    if (overColumn) {
      // If we're dragging over a column and the task is from a different column
      const destinationColumnId = overColumn.id;
      
      if (sourceColumnId !== destinationColumnId) {
        const newBoard = structuredClone(board);
        
        // Find the columns
        const sourceColumn = newBoard.columns.find(col => col.id === sourceColumnId);
        const destinationColumn = newBoard.columns.find(col => col.id === destinationColumnId);
        
        if (sourceColumn && destinationColumn) {
          // Remove from source and add to destination
          const [task] = sourceColumn.tasks.splice(sourceTaskIndex, 1);
          destinationColumn.tasks.push(task);
          
          setBoard(newBoard);
        }
      }
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTask(null);
    
    const { active, over } = event;
    
    if (!over) return;
    
    const activeId = active.id as string;
    const overId = over.id as string;
    
    if (activeId === overId) return;
    
    // Find source column
    let sourceColumnId = "";
    
    for (const column of board.columns) {
      const taskIndex = column.tasks.findIndex(task => task.id === activeId);
      if (taskIndex !== -1) {
        sourceColumnId = column.id;
        break;
      }
    }
    
    // Find if over is a task
    let isOverATask = false;
    let destinationColumnId = "";
    
    for (const column of board.columns) {
      const taskIndex = column.tasks.findIndex(task => task.id === overId);
      if (taskIndex !== -1) {
        isOverATask = true;
        destinationColumnId = column.id;
        break;
      }
    }
    
    // If over is a column
    if (!isOverATask) {
      destinationColumnId = overId;
    }
    
    if (sourceColumnId && destinationColumnId && sourceColumnId !== destinationColumnId) {
      toast({
        title: "Task moved",
        description: `Task moved to ${board.columns.find(col => col.id === destinationColumnId)?.title}`,
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex space-x-4 pb-4 overflow-x-auto">
        {board.columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </div>
      <DragOverlay>
        {activeTask && <Task task={activeTask} />}
      </DragOverlay>
    </DndContext>
  );
}
