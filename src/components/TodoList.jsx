import React from "react";
import Todo from "./Todo";

function TodoList({ todos, onRemove,updatedTodo}) {
  return (
    <div style={{ width: "100%" }}>
      {
      todos && todos.map((todo) =>(
      <Todo key = {todo.id} todo={todo} onRemove={onRemove} updatedTodo = {updatedTodo} todos = {todos}/>
    ))
    }
    </div>
  );
}

export default TodoList;
