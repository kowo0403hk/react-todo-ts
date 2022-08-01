import React, { FC } from "react";
import { HeaderProps } from "../Interfaces";

const Header: FC<HeaderProps> = ({
  task,
  deadline,
  onSubmit,
  handleChange,
}: HeaderProps) => {
  return (
    <div className="header">
      <form onSubmit={onSubmit}>
        <div className="inputContainer">
          <input
            type="text"
            id="task"
            placeholder="Add new task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            id="deadline"
            placeholder="Add a deadline (in days)"
            min={0}
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button>Add task</button>
      </form>
    </div>
  );
};

export default Header;
