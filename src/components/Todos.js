import React, {useState} from 'react'
import "../Styles/todoContainer.css"
import { TiDelete } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";
import TodoForm from "../components/TodoForm"


function Todos({todos, deleteTodo, updateTodo}) {

     const [editTodo, setEditTodo] = useState({
         id: null,
         value: ""
     })
     
   const submitUpdate = (value) => {
        updateTodo(editTodo.id, value);
        setEditTodo({
            id: null,
            value: ""
        })
    }

    if (editTodo.id) {
        return <TodoForm editTodo={editTodo} onSubmit={submitUpdate} />
    }

    return ( todos.map(todo => 

            <div className="todoContainer"  key= {todo.id}>
                <div className="singleTodo">
                    {todo.text}
                </div>
                <div className="buttons">
                <TiDelete className ="littleButton" onClick={()=> deleteTodo(todo.id)} size="20px"/>
                <MdModeEdit className ="littleButton" onClick={()=> setEditTodo({id: todo.id, value: todo.text})} size="20px"/>
                </div>
            </div>
            )
    )
}

export default Todos;
