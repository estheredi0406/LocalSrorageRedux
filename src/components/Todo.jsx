import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = (props) => {
  const [todos, setTodos] = useContext(TodoContext);

  const completedTodo = (e) => {
    const filterTodos = todos.map((item) => {
      if (item.id === e.target.id) {
        item.completed = e.target.checked;
      }
      return item;
    });
    setTodos(filterTodos);
  };

  const deleteTodo = (e) => {
    e.preventDefault();

    const filterTodos = todos.filter((item) => {
      return item.id !== e.target.id;
    });
    setTodos(filterTodos);
  };

  const isCompleted = props.completed ? true : false;

  return (
    <div>
      <input
        type="checkbox"
        id={props.id}
        value={props.id}
        checked={isCompleted}
        onChange={(e) => completedTodo(e)}
      />
      <label htmlFor={props.id}>{props.title}</label>
      {/* Ensure the onClick event is properly triggering deleteTodo */}
      <button id={props.id} onClick={(e) => deleteTodo(e)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
