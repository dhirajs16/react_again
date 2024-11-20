import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  reducerPath: "studentApi", // name of the api
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }), // api url          //django/drf_crud
  endpoints: (builder) => ({
    // action you want to perform with api like (get, update, delete)
    studentList: builder.query({
      query: () => ({
        url: "api",
        method: "GET",
      }),
    }),
    studentById: builder.query({
      query: (id) => ({
        url: `api/${id}`,
        method: "GET",
      }),
    }),
    studentByLimit: builder.query({
      query: (limit) => ({
        url: `api/?_limit=${limit}`,
        method: "GET",
      }),
    }),
    deleteStudentById: builder.mutation({
      query: (id) => ({
        url: `api/${id}/`,
        method: "DELETE",
      }),
    }),
    createStudent: builder.mutation({
      query: (newData) => {
        console.log(newData);
        return {
          url: "api/",
          method: "POST",
          body: newData,
          headers: {
            'Content-type': 'application/json',
          }
        }
      },
    }),
  }),
});

export const {
  useStudentListQuery,
  useStudentByIdQuery,
  useStudentByLimitQuery,
  useDeleteStudentByIdMutation,
  useCreateStudentMutation,
} = studentApi;
