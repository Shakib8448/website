import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddItem from "./components/AddItem"

function App() {
  const [count, setCount] = useState(0);

  return (
    <center class="todo-content">
      <AppName />
      <AddTodo />
      <AddItem />
      <AddItem />
      <AddItem />
    </center>
  );
}

export default App;
