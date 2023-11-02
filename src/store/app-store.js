import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter-slice';
import { userSlice } from './user-slice';
import { themeSlice } from './theme-slice';
import logger from 'redux-logger';
import { myLogger } from './my-logger';

export const appStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
    theme: themeSlice.reducer,
  },
  middleware: [logger],
});
