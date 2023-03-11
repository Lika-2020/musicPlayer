import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import { fetchLogin, fetchRefresh } from './apiLogin';

export const login = createAsyncThunk('auth/login', async (payload) => {
  const response = await fetchLogin(payload);
  return response.data;
});

export const refresh = createAsyncThunk('auth/refresh', async () => {
  const response = await fetchRefresh();
  return response.data;
});

const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: '',
    refreshToken: '',
  },
  reducers: {
    setAccessToken: (state, action) => ({
        ...state,
        token: action.payload,
    }),
    setRefreshToken: (state, action) => ({
      ...state,
       refreshToken: action.payload
    }),
  },
  extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => ({
            ... state,
            isAuthenticated: true,
            accessToken: action.payload.access,
            refreshToken: action.payload.refresh,
      }) 
    )

    builder.addCase(login.rejected, (state) => ({
        
        ...state,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
      })
    )

    builder.addCase(refresh.fulfilled, (state, action) => ({
        // логика при успешном обновлении токена
        ...state,
        accessToken: action.payload.access,
      })
    )

    builder.addCase(refresh.rejected, (state) => ({
        // логика при ошибке обновления токена
        ...state,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
      })
    )
  },
})

export const { setAccessToken, setRefreshToken } = loginSlice.actions
export default loginSlice.reducer
