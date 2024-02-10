import React, { useState, useId } from "react";
import "./App.css";
import Input from "./components/Inputfield";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, { todo, id: uuidv4(), completed: false }]);
    setTodo("");
  };

  return (
    <div className="w-screen h-screen gap-4 flex items-center justify-start flex-col text-white font-lato p-10 bg-gradient-to-tr from-[#c0392b] to-[#8e44ad]">
      <Toaster />
      <h1 className="text-4xl font-semibold text-center uppercase">
        todo List
      </h1>
      <Input setTodo={setTodo} todo={todo} handleAddTodo={handleAddTodo} />

      <div className="w-2/3 grid grid-cols-2 place-items-center items-start gap-4">
        <div className="space-y-2 w-full">
          <h2 className="underline font-semibold text-3xl text-center">
            Pending Todos
          </h2>
          <TodoList setTodos={setTodos} todos={todos} />
        </div>
        <div className="space-y-2 w-full">
          <h2 className="underline font-semibold text-3xl text-center">
            Completed Todos
          </h2>
          <TodoList setTodos={setTodos} todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default App;
