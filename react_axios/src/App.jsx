import SearchBar from "./components/SearchBar"
import searchImages from "./api"
import ImageList from "./components/ImageList"
import { useState } from "react"

const App = () => {
    const [images, setImages] = useState([])

    // lift up state handler
    const handleSubmit = async (term) => {
        const result = await searchImages(term)
        setImages(result)
    }

    return (
        <>
            <h1>App page</h1>
            <SearchBar onSubmit ={ handleSubmit } />
            <ImageList images = {images} />
        </>
    )
}

export default App