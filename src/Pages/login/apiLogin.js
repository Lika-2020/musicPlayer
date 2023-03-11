import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://painassasin.online/api'

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken
    if (token) {
      headers.set('authorization', `${token}`)
    }
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')
    return headers
  },
})

const apiLogin = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    // login endpoint
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login/',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
      transformResponse: (response) => {
        localStorage.setItem('accessToken', response.access)
        localStorage.setItem('refreshToken', response.refresh)
        return response
      },
    }),

    getProtectedData: builder.query({
      query: () => '/protected-data/',
      providesTags: ['ProtectedData'],
    }),

    refreshToken: builder.mutation({
      query: () => ({
        url: '/user/token/refresh/',
        method: 'POST',
        body: {
          refresh: localStorage.getItem('refreshToken'),
        },
      }),
      transformResponse: (response) => {
        localStorage.setItem('accessToken', response.access)
        return response
      },
    }),
  }),
})


export const fetchRefresh = async () => {
  const response = await apiLogin.endpoints.refreshToken.initiate()
  return response
}

export const fetchLogin = async (credentials) => {
  const response = await apiLogin.endpoints.login(credentials)
  return response
}

export const { useLoginMutation, useGetProtectedDataQuery } = apiLogin
