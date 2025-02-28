import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const [todos] = useContext(TodoContext);

  return 1 <= todos.length ? (
    todos.map((item) => {
      return (
        <Todo
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
        />
      );
    })
  ) : (
    <h3>No todo found</h3>
  );
};

export default TodoList;
