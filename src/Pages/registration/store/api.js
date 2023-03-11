import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://painassasin.online' }),
    endpoints: (builder) => ({
      register: builder.mutation({
        query: (body) => ({
          url: '/user/signup/',
          method: 'POST',
          body,
        }),
      }),

      refreshToken: builder.mutation({
        query: (body) => ({
            url: '/user/token/refresh/',
            method: 'POST',
            body,
        }),
    }),
    
  
      getToken: builder.mutation({
          query: (body) => ({
            url: '/user/token/',
            method: 'POST',
            body,
          }),
      }),
    }),
  })
  
  export const { useRegisterMutation , useGetTokenMutation, useRefreshTokenMutation } = authApi;
