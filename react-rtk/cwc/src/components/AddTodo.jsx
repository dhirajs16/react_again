import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice"



const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')      
    }

    return(
        <>
            <form onSubmit={ handleFormSubmit }>
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="text" id="id_text" />
                <input type="submit" value="Add Todo" />
            </form>
        </>
    )
}

export default AddTodo