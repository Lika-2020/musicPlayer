import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const trackApi = createApi({
  reducerPath: 'trackApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://painassasin.online/catalog' }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => '/track/all/',
    }),
  }),
});

export const { useGetAllTracksQuery } = trackApi;
