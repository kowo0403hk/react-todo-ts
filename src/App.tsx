import { FC, useState } from "react";
import { Task } from "./Interfaces";

import "./App.css";

const defaultFormData: Task = {
  task: "",
  deadline: 0,
};

const App: FC = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const { task, deadline } = formData;
  const [todoList, setTodoList] = useState<Task[]>([]); //an array that contains Task interface objects

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList([...todoList, formData]); // adding new task and deadline
    setFormData(defaultFormData);
  };

  return (
    <div className="App">
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
      <div className="todoList"></div>
    </div>
  );
};

export default App;
