import SearchBar from "./components/SearchBar"
import searchImages from "./api"

const App = () => {
    
    const handleSubmit = async (term) => {
        const result = await searchImages(term)
        console.log(result)
    }



    return (
        <>
            <h1>App page</h1>
            <SearchBar onSubmit ={ handleSubmit } />
            
        </>
    )
}

export default App