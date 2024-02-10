import React, { useState, useRef } from "react";
import { Todo } from "../model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";

interface Props {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCompleteTodo: (id: string) => void;
  handleEditTodo: (id: string, text: string, e: React.FormEvent) => void;
}

const SingleTodo: React.FC<Props> = ({
  todo: singelTodo,
  handleDeleteTodo,
  handleCompleteTodo,
  handleEditTodo,
}) => {
  const { completed, id, todo } = singelTodo;
  const [showInputField, setshowInputField] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editText === "") {
      toast.remove()
      return toast.error("Please enter a word!!!");
    } else {
      console.log("22");
      handleEditTodo(id, editText, e);
      setshowInputField(false);
    }
  };

  return (
    <div
      className={`w-full flex gap-3 items-center justify-between hover:ring-4 p-3 hover:scale-105 transition cursor-pointer text-white font-semibold rounded-lg bg-gradient-to-r ${
        completed
          ? "from-[#76b852] to-[#8DC26F] ring-green-400 line-through"
          : "from-[#FFB75E] to-[#ED8F03] ring-yellow-400"
      } `}
    >
      {showInputField ? (
        <form
          onSubmit={(e) => {
            handleOnSubmit(e);
          }}
        >
          <input
            type="text"
            className="outline-none flex-1 bg-white/20 rounded-lg pl-5"
            ref={inputRef}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </form>
      ) : (
        <p>{todo}</p>
      )}
      <div className="flex items-center gap-x-2">
        <FontAwesomeIcon
          icon={faPen}
          className="hover:scale-110"
          color="blue"
          onClick={() => {
            inputRef.current?.focus();
            setshowInputField(true);
            setEditText(todo);
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="hover:scale-110"
          color="red"
          onClick={() => handleDeleteTodo(id)}
        />
        <FontAwesomeIcon
          icon={faClipboardCheck}
          className="hover:scale-110"
          color="green"
          onClick={() => handleCompleteTodo(id)}
        />
      </div>
    </div>
  );
};

export default SingleTodo;
