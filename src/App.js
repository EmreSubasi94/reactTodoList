import logo from "./logo.svg";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import { useState } from "react";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (newtodo) => {
    debugger;
    setTodos([...todos, newtodo]);
  };
  const removeTodo = (todoid) => {
  const extracted = todos.filter((todo)=> todo.id !==todoid) 
   setTodos([...extracted]) 
  }
  const updatedTodo = (newTodo) => {
    const updatedTodos = todos.map((todo)=>{
      if(todo.id !== newTodo.id){
        return todo
      }
      return newTodo

    })
    setTodos([...updatedTodos]
      
    )
  }
  
  return (
    <div className="App">
      <div className="headerdiv"><h1>Todo List APP</h1></div>
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TodoCreate onCreate={createTodo} />
        <TodoList todos = {todos} onRemove = {removeTodo} updatedTodo = {updatedTodo}/>
        <footer>{`Yapılacak iş sayısı: ${todos.length}`}</footer>
      </div>
    </div>
  );
}

export default App;
