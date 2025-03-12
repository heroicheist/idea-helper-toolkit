
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Square, SquareKanban, User, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-950">
      <div className="text-center max-w-2xl mx-auto p-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4" />
          Task Management & Portfolio
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
          Welcome to My Workspace
        </h1>
        <p className="text-xl text-blue-700/80 dark:text-blue-300/80 mb-8">
          Organize your tasks efficiently and view my professional portfolio.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105 shadow-md">
            <Link to="/kanban">
              <SquareKanban className="h-5 w-5" />
              Kanban Board
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2 border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all transform hover:scale-105">
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
