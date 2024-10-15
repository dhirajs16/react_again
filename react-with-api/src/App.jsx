import SearchBar from "./components/SearchBar"


const App = () => {
    
    const handleSubmit = (term) => {
        console.log('Search term is', term)
    }



    return (
        <>
            <h1>App page</h1>
            <SearchBar onSubmit ={ handleSubmit } />
            
        </>
    )
}

export default App