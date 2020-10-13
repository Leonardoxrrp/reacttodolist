import React, {useState, useEffect,useRef} from 'react'
import "../Styles/todoForm.css"
    
function TodoForm(props) {
    const [input, setInput] = useState(props.editTodo ? props.editTodo.value : "");
    const inputRef = useRef(null)

    useEffect(()=> {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault();

        setInput("");
        props.onSubmit({
            id: Math.floor(Math.random()* 10000),
            text: input
        })
    }
    const handleChange = e => {
        setInput(e.target.value)
    }

    return (
            <form className="form" onSubmit={handleSubmit}>
                {props.editTodo ? (
                    <>
                        <input ref={inputRef} className="form-control" maxLength="25" placeholder={input} value={input} onChange={handleChange} required>
                        </input >
                        <button className="btn btn-dark">Update</button>
                    </>
                ) : (
                        <>
                            <input ref={inputRef} className="form-control" maxLength="25" placeholder="Here your text" value={input} onChange={handleChange} required>
                            </input >
                            <button className="btn btn-dark">Send</button>
                        </>
                    )
                }



            </form>
    )
}

export default TodoForm;
