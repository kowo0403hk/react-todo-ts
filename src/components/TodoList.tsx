import { FC } from "react";
import TodoTask from "./TodoTask";
import { Task, TodoListProps } from "../Interfaces";

const TodoList: FC<TodoListProps> = ({
  todoList,
  completeTask,
}: TodoListProps) => {
  return (
    <div className="todoList">
      {todoList.map((task: Task, key: number) => {
        return <TodoTask key={key} task={task} completeTask={completeTask} />;
      })}
    </div>
  );
};

export default TodoList;
