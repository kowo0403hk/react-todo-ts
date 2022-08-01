export interface Task {
  task: string;
  deadline: number;
}

export interface HeaderProps {
  task: string;
  deadline: number;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
