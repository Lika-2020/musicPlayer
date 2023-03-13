import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { favoriteSlice } from './favoriteSlice'

const API_URL = 'https://painassasin.online/catalog/track/'

 export const favoriteApi = createApi({
  reducerPath: 'favoriteApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    toggleFavorite: builder.mutation({
      query: ({id, isFavorite}, accessToken) => ({
        url: `${id}/favorite/`,
        method: isFavorite ? 'POST' : 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }),
      onSuccess: ({ id, isFavorite }, { dispatch }) => {
        const { addToFavorite, removeFromFavorite } = favoriteSlice.actions
        dispatch(isFavorite ? addToFavorite({ id }) : removeFromFavorite(id))
      },
    }),
  }),
})

export  const { useToggleFavoriteMutation } = favoriteApi
