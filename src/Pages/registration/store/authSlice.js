import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useGetTokenMutation } from './api'



export const fetchToken = createAsyncThunk(
    'auth/fetchToken',
    async ({ username, email, password }) => { // Добавили деструктуризацию объекта
      const credentials = { username, email, password }; // Создали объект с параметрами аутентификации
      const response = await useGetTokenMutation(credentials);
      localStorage.setItem('token', response.data.token);
      return response.data.token;
    }
  );
  

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    username: '',
    isLoading: false,
    error: null,
  },

  reducers: {
    setToken: (state, action) => ({
      ...state,
      token: action.payload,
    }),
    setUsername: (state, action) => ({
      ...state,
      username: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.pending, (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }))
    builder.addCase(fetchToken.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      error: null,
      token: action.payload,
    }))
    builder.addCase(fetchToken.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }))
  },
})

export const { setToken, setUsername } = authSlice.actions

export const selectToken = (state) => state.auth.token
export const selectUsername = (state) => state.auth.username

export default authSlice.reducer
