import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
    reducerPath: 'studentApi',                                          // name of the api 
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/'}),     // api url
    endpoints: (builder) => ({                                           // action you want to perform with api like (get, update, delete)
        studentList: builder.query({
            query: () => ({
                url: 'api',
                method: 'GET'
            })
        })
    }),
})

export const { useStudentListQuery } = studentApi