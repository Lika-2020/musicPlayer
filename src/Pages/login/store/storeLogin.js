/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import loginReducer from '../loginSlice'
import { store as registrationStore } from '../../registration/store/store'
import { trackApi } from '../../../components/PlaylistItemAPI/apiPlayist';
import addFavoriteTrackReducer from  '../../../components/PlaylistItemAPI/favoriteSlice';


export const storeLogin = configureStore({
  reducer: {
    login: loginReducer,
    [trackApi.reducerPath]: trackApi.reducer,
    favorite: addFavoriteTrackReducer,
  
  },
  preloadedState: {
    login: registrationStore.getState().registration,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trackApi.middleware),
})

setupListeners(storeLogin.dispatch)
