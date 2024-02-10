import React, { memo } from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ setTodos, todos }) => {
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleCompleteTodo = (id: string) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleEditTodo = (id: string, text: string, e: React.FormEvent) => {
    e.preventDefault();

    setTodos(todos.map((t) => (t.id === id ? { ...t, todo: text } : t)));
  };
  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
