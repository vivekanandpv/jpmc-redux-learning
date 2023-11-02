import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    roles: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.roles = action.payload.roles;
    },
    logout: (state) => {
      state.user = null;
      state.roles = null;
    },
  },
});
