
import { Column as ColumnType, Task as TaskType } from "@/types/kanban";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Task } from "./Task";
import { cn } from "@/lib/utils";

interface ColumnProps {
  column: ColumnType;
}

export function Column({ column }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex flex-col h-full min-h-[500px] w-[280px] bg-secondary/20 rounded-md">
      <div className="p-2 font-medium border-b bg-secondary/30 rounded-t-md">
        <h3 className="flex items-center justify-between">
          <span>{column.title}</span>
          <span className="text-xs font-normal text-muted-foreground bg-secondary rounded-full w-6 h-6 flex items-center justify-center">
            {column.tasks.length}
          </span>
        </h3>
      </div>
      <div
        ref={setNodeRef}
        className={cn(
          "p-2 flex-grow overflow-y-auto",
          isOver && "bg-secondary/40"
        )}
      >
        <SortableContext
          items={column.tasks.map(task => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {column.tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}
