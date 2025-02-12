import React, { useState } from "react";
import "../App.css";
import TodoList from "./TodoList";

function TodoCreate({ onCreate }) {
  const [newtodo, setNewTodo] = useState("");
  const clearinput = () => {
    setNewTodo("")
}
  const createnewtodo = () => {
    if (!newtodo) return;
    const request = {
      id: Math.floor(Math.random() * 9999999999),
      content: newtodo,
    };
    onCreate(request);
    clearinput();
  };
  return (
    <div className="todo-create">
      <input
        value={newtodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Enter ToDo "
      ></input>
      <button onClick={createnewtodo} className="todo-btn">
        Todo Oluştur
      </button>
      <div style={{ width: "100%", marginTop: "40px" }}>
        <TodoList />
      </div>
    </div>
  );
}
export default TodoCreate;
