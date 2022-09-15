import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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
      />
      <TodoList />
    </div>
  );
}

export default App;
