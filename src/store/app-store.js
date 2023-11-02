import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter-slice';
import { userSlice } from './user-slice';

export const appStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  },
});
