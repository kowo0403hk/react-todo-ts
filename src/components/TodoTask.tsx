import { FC } from "react";
import { TodoTaskProps } from "../Interfaces";

const TodoTask: FC<TodoTaskProps> = ({ task, completeTask }: TodoTaskProps) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.task}</span>
        {task.deadline > 1 && <span>In {task.deadline} Days</span>}
        {task.deadline <= 1 && <span> In {task.deadline} Day</span>}
      </div>
      <button onClick={() => completeTask(task.task)}>
        <strong>X</strong>
      </button>
    </div>
  );
};

export default TodoTask;
