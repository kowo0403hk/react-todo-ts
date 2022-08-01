import { FC, useState } from "react";
import { Task } from "./Interfaces";

import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const defaultFormData: Task = {
  task: "",
  deadline: 0,
};

const App: FC = () => {
  // state management at App level, but will pass down props to Header components
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

  const completeTask = (taskToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.task !== taskToDelete; // keep only the tasks which does not equal to the taskTo Delete
      })
    );
  };

  return (
    <div className="App">
      <Header
        task={task}
        deadline={deadline}
        onSubmit={onSubmit}
        handleChange={handleChange}
      />
      <TodoList todoList={todoList} completeTask={completeTask} />
    </div>
  );
};

export default App;
