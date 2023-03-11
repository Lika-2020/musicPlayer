import { configureStore } from '@reduxjs/toolkit'
import registrationReducer, { authSlice } from './authSlice'

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    [authSlice.reducerPath]: authSlice.reducer,
  },
})


