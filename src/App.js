import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // !just run once
  useEffect(() => {
    // get todos from local storage - just run once
    const getLocalStorage = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let localTodo = JSON.parse(localStorage.getItem("todos"));
        setTodos(localTodo);
      }
    };

    getLocalStorage();
  }, []);

  //  !We update the state with every todo submit
  useEffect(() => {
    const filterTodoHandler = () => {
      if (status === "completed") {
        return setFilteredTodos(
          todos.filter((todo) => todo.completed === true)
        );
      }

      if (status === "uncompleted") {
        return setFilteredTodos(
          todos.filter((todo) => todo.completed === false)
        );
      }

      return setFilteredTodos(todos);
    };
    filterTodoHandler();

    // save todo to local storage
    const saveLocalStorage = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    saveLocalStorage();
  }, [todos, status]);

  return (
    <div>
      <header>
        <h1>Tolgahan's Todo List 🚀</h1>
        <p>List of things I plan to do soon. 📝</p>
      </header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
