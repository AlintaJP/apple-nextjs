import { configureStore } from '@reduxjs/toolkit';
import basketReducer, { BasketState } from './basketSlice';

export const store = configureStore({
  reducer: basketReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
