import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
