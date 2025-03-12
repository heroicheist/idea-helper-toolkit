
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Square, SquareKanban, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Welcome to Task Management</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Organize your tasks efficiently with our Kanban board system.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild className="gap-2">
            <Link to="/kanban">
              <SquareKanban className="h-5 w-5" />
              Kanban Board
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <Link to="/portfolio">
              <User className="h-5 w-5" />
              Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
