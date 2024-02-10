import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todo: string | number;
  handleAddTodo: (e: React.FormEvent) => void;
}

const Inputfield: React.FC<Props> = ({ setTodo, todo, handleAddTodo }) => {
  return (
    <form className="w-2/3 relative" onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Add Todo..."
        className="w-full h-12 text-black font-semibold transition rounded-full p-1 pl-10 focus:shadow-2xl inset-0 outline-none focus:ring-8 ring-blue-600 focus:ring-offset-4 ring-4 "
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit">
        <FontAwesomeIcon
          icon={faCirclePlus}
          color="blue"
          className="absolute right-3 top-2 text-3xl cursor-pointer hover:scale-110 active:scale-90 transition duration-100 ease-in-out active:ring-4 rounded-full ring-blue-400"
        />
      </button>
    </form>
  );
};

export default Inputfield;
