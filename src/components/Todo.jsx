import React, { use, useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";



import "../App.css";

function Todo({ todo,onRemove,updatedTodo,todos}) {
  const {id,content} = todo
  const [newTodo,setNewTodo] = useState(content)
  const [editable,setEditable] = useState(false)
  const [checkedable,setCheckedable] = useState(true)
  const [isChecked, setIsChecked] = useState(true);
  const onRemoveTodo = () => {
    onRemove(id)
  }
  const updatednewTodo = () => {
    const request = {
      id : id,
      content: newTodo
    }
    updatedTodo(request)
    setEditable(false)
  }
  const undo = () => {
    todos.map((todo)=>{
      if(todo.id !== newTodo.id)
        {setIsChecked(false)}
      setIsChecked(true)
      setCheckedable(true)

    })}
  const checktodo = () => {
    todos.map((todo)=>{
      if(todo.id !== newTodo.id)
        {setIsChecked(true)}
      setIsChecked(false)
      setCheckedable(false)

    })}
  return (
    <div className="todo">
      <div>{editable ? <input 
      className="updateInput"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      type="text"></input> : <span className={isChecked ? "":"content"}>{content}</span>}</div>
      <div>
        {checkedable ? <FaCheck className="todo-icons" onClick={checktodo}/>:<FaUndo className="todo-icons" onClick={undo}/>      }
        <IoIosRemoveCircle className="todo-icons" onClick={onRemoveTodo}/>
        {editable ? <FaSave className="todo-icons" onClick={updatednewTodo}/> : <MdEdit className="todo-icons" onClick={()=>setEditable(true)} />
        }

      </div>
    </div>
  );
}

export default Todo;
