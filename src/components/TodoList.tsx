import { FC } from "react";
import TodoTask from "./TodoTask";
import { Task } from "../Interfaces";

interface TodoListProps {
  todoList: Task[];
}

const TodoList: FC<TodoListProps> = ({ todoList }: TodoListProps) => {
  return (
    <div className="todoList">
      {todoList.map(() => {
        return <TodoTask />;
      })}
    </div>
  );
};

export default TodoList;
