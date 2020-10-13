import React, {useState} from 'react'
import TodoForm from './TodoForm'
import "../Styles/listContainer.css"
import Todo from "./Todos"


function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodo = [todo, ...todos]
        setTodos(newTodo)

    }
    const deleteTodo = id => {
        const deletedTodo = [...todos].filter(element => element.id !== id)

        setTodos(deletedTodo)
    }
    const updateTodo = (id, newValue) => {
        setTodos(prev => prev.map(item => item.id === id ? newValue : item))
    }
    // const updateTodo = (id, newValue) =>{
    //     setTodos(prev => prev.map(item => (item.id=== id ? newValue : item)))
    // }
    return (

        <div className="listContainer">
            <TodoForm onSubmit={addTodo} />
                <Todo
                    todos={todos}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
        </div>
        
    )
}

export default TodoList
