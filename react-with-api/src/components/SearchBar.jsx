
const SearchBar = ({ onSubmit }) => {
    const handleFormSubmit = (e) => {
        e.preventDefault()
        onSubmit(e.target)
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" />
            </form>
        </>
    )
}

export default SearchBar