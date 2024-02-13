import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com' }),
  endpoints: builder => ({
    getFilmList: builder.query({
      query: (name) => `/?apikey=64405bd2&s=${name}`
    }),
    getFilmByID: builder.query({
      query: (id) => `/?apikey=64405bd2&i=${id}`
    })
  })
})

export const { useGetFilmListQuery, useGetFilmByIDQuery } = apiSlice;