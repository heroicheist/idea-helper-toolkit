
import { Button } from "@/components/ui/button";
import { KanbanBoard } from "@/components/kanban/KanbanBoard";
import { FolderKanban, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Kanban() {
  return (
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FolderKanban className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Kanban Board</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              Add Task
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground">
          Organize and prioritize your tasks with a flexible Kanban board
        </p>
      </header>
      
      <main>
        <KanbanBoard />
      </main>
    </div>
  );
}
