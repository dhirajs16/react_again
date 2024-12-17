


import axios from "axios";


const searchImages = async (term) => {
    try {
        const response = await axios.get(
            'https://api.unsplash.com/search/photos/',
            {
                headers: {
                    Authorization: 'Client-ID O-KgKAibKgTKthvwzVTbiy4hl1e5Lv3_8FjMlaGLYTI'
                },
                params: {
                    query: term
                }
            }
        )

        // console.log(response.data.results)
        return response.data.results
    }
    catch (error){
        console.log('The fetch error is, \n', error)

    }
}




export default searchImages

