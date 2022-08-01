export interface HeaderProps {
  task: string;
  deadline: number;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Task {
  task: string;
  deadline: number;
}

export interface TodoListProps {
  todoList: Task[];
  completeTask: (taskToDelete: string) => void;
}

export interface TodoTaskProps {
  task: Task;
  completeTask: (taskToDelete: string) => void;
}
