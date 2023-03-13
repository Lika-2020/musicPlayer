/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import loginReducer from '../loginSlice'
import { store as registrationStore } from '../../registration/store/store'
import { trackApi } from '../../../components/PlaylistItemAPI/apiPlayist'
import { favoriteApi } from '../../../components/PlaylistItemAPI/favoriteApi'

export const storeLogin = configureStore({
  reducer: {
    login: loginReducer,
    [trackApi.reducerPath]: trackApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
  },
  preloadedState: {
    login: registrationStore.getState().registration,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trackApi.middleware, favoriteApi.middleware),
})

setupListeners(storeLogin.dispatch)
