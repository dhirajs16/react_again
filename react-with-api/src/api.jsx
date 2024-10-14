// import axios from 'axios'

// const searchImages = async () => {
//     try {
//         const response = await axios.get(
//             'https://api.unsplash.com/search/photos/',
//             {
//                 headers: {
//                     Authorization: 'Client-ID O-KgKAibKgTKthvwzVTbiy4hl1e5Lv3_8FjMlaGLYTI'
//                 },
//                 params: {
//                     query: 'cars'
//                 }
//             }
//         )

//         console.log(response)
//         return response


//     } catch (error) {
//         console.error('Error fetching images:', error)
//         if (error.response && error.response.status === 401) {
//             console.error('Unauthorized: Check your API key or token.')
//         }
//     }
// }

// export default searchImages



import axios from "axios";


const searchImages = async () => {
    try {
        const response = await axios.get(
            'https://api.unsplash.com/search/photos/',
            {
                headers: {
                    Authorization: 'Client-ID O-KgKAibKgTKthvwzVTbiy4hl1e5Lv3_8FjMlaGLYTI'
                },
                params: {
                    query: 'cars'
                }
            }
        )

        console.log(response)
        return response
    }
    catch (error){
        console.log('The fetch error is, \n', error)

    }
}




export default searchImages

