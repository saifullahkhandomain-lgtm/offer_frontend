import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('adminToken');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    admin: null,
    token: token || null,
    loading: !!token,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.admin = action.payload.admin;
      state.token = action.payload.token;
      state.loading = false;
    },
    setAdmin: (state, action) => {
      state.admin = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    logout: (state) => {
      state.admin = null;
      state.token = null;
      state.loading = false;
      localStorage.removeItem('adminToken');
    },
  },
});

export const { setCredentials, setAdmin, setLoading, logout } = authSlice.actions;
export default authSlice.reducer;
