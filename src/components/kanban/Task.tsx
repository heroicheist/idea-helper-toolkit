
import { Task as TaskType } from "@/types/kanban";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TaskProps {
  task: TaskType;
}

const getPriorityColor = (priority?: 'low' | 'medium' | 'high') => {
  switch (priority) {
    case 'high':
      return 'bg-destructive text-destructive-foreground';
    case 'medium':
      return 'bg-amber-500 text-white';
    case 'low':
      return 'bg-green-500 text-white';
    default:
      return 'bg-secondary text-secondary-foreground';
  }
};

export function Task({ task }: TaskProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "relative mb-2 cursor-grab active:cursor-grabbing",
        isDragging && "z-10 opacity-75"
      )}
    >
      <Card className="shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="p-3 pb-0">
          <CardTitle className="text-sm font-medium">{task.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          {task.description && (
            <CardDescription className="mb-2 text-xs">
              {task.description}
            </CardDescription>
          )}
          {task.priority && (
            <Badge className={cn("text-xs", getPriorityColor(task.priority))}>
              {task.priority}
            </Badge>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
