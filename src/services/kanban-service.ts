
import { Board, Column, Task } from "@/types/kanban";

// Initial data for the Kanban board
const initialData: Board = {
  columns: [
    {
      id: "todo",
      title: "To Do",
      tasks: [
        {
          id: "task-1",
          title: "Research competitors",
          description: "Analyze top 5 competitors and create a report",
          priority: "medium",
        },
        {
          id: "task-2",
          title: "Design homepage",
          description: "Create wireframes for the new homepage",
          priority: "high",
        },
        {
          id: "task-3",
          title: "Update documentation",
          description: "Update API documentation with new endpoints",
          priority: "low",
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      tasks: [
        {
          id: "task-4",
          title: "Implement authentication",
          description: "Add user login and registration functionality",
          priority: "high",
        },
        {
          id: "task-5",
          title: "Fix navigation bug",
          description: "Fix the navigation menu issue on mobile devices",
          priority: "medium",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        {
          id: "task-6",
          title: "Set up project repository",
          description: "Initialize Git repository and add initial files",
          priority: "high",
        },
        {
          id: "task-7",
          title: "Create project plan",
          description: "Define project timeline and milestones",
          priority: "medium",
        },
      ],
    },
  ],
};

// Generate a unique ID for new tasks
const generateId = () => Math.random().toString(36).substr(2, 9);

// Class to manage Kanban board data
class KanbanService {
  private board: Board = initialData;

  getBoard(): Board {
    return this.board;
  }

  addTask(columnId: string, task: Omit<Task, "id">): Task {
    const newTask = { id: `task-${generateId()}`, ...task };
    const column = this.board.columns.find(col => col.id === columnId);
    
    if (column) {
      column.tasks.push(newTask);
    }
    
    return newTask;
  }

  moveTask(taskId: string, sourceColumnId: string, destinationColumnId: string): void {
    const sourceColumn = this.board.columns.find(col => col.id === sourceColumnId);
    const destinationColumn = this.board.columns.find(col => col.id === destinationColumnId);
    
    if (!sourceColumn || !destinationColumn) return;
    
    const taskIndex = sourceColumn.tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex === -1) return;
    
    const [removedTask] = sourceColumn.tasks.splice(taskIndex, 1);
    destinationColumn.tasks.push(removedTask);
  }

  reorderTasks(columnId: string, startIndex: number, endIndex: number): void {
    const column = this.board.columns.find(col => col.id === columnId);
    
    if (!column) return;
    
    const [removedTask] = column.tasks.splice(startIndex, 1);
    column.tasks.splice(endIndex, 0, removedTask);
  }
}

export const kanbanService = new KanbanService();
