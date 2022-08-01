import { FC, useState } from "react";
import { Task } from "./Interfaces";

import "./App.css";
import Header from "./components/Header";

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
      <Header
        task={task}
        deadline={deadline}
        onSubmit={onSubmit}
        handleChange={handleChange}
      />
      <div className="todoList"></div>
    </div>
  );
};

export default App;
