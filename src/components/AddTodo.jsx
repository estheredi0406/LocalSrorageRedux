import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useContext(TodoContext);

  const addTodo = (e) => {
    e.preventDefault();
    if ("" === title || undefined === title) {
      alert("Field cannot be empty");
      return;
    }
    const newTodo = [
      ...todos,
      { id: uuidv4(), title: title, completed: false },
    ];
    setTodos(newTodo);
    setTitle("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <input
        type="text"
        placeholder="enter todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <div>{title}</div>
    </div>
  );
};

export default AddTodo;
