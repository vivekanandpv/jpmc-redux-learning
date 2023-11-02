import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter-slice';

export const appStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
