import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter-slice';
import { userSlice } from './user-slice';
import { themeSlice } from './theme-slice';

export const appStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
    theme: themeSlice.reducer,
  },
});
