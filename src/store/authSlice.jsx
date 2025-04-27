import { createSlice } from "@reduxjs/toolkit";

const isAuth = localStorage.getItem('isAuthenticated') === 'true';
const userData = localStorage.getItem('userData');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: isAuth,
    userData: userData ? JSON.parse(userData) : null
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem('isAuthenticated', 'false');
      localStorage.removeItem('userData');
      state.userData = null;
    }
  }
});

export const { login, setUserData, logout } = authSlice.actions;
export default authSlice.reducer;