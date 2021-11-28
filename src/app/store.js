import { configureStore } from '@reduxjs/toolkit';
import { searchApi } from '../service/searchApi';
export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,


  },
});
