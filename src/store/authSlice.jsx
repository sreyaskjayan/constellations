import { createSlice } from "@reduxjs/toolkit";

const isAuth = localStorage.getItem('isAuthenticated') === 'true';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: isAuth, // now a real boolean true/false
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true'); // saving as string "true"
      // state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem('isAuthenticated', 'false'); // saving as string "false"
      // state.user = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;