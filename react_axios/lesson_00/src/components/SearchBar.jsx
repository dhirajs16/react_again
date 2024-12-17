import { useState } from "react"



const SearchBar = ({ onSubmit }) => {
    // state
    const [term, setTerm] = useState('')


    // handle functions
    const handleFormSubmit = (e) => {
        e.preventDefault()
        onSubmit(term)
    }
    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    // return statement
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} type="text" />
            </form>
        </>
    )
}

export default SearchBar