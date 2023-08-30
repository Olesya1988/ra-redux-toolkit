import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import factsReducer from '../features/counter/factsSlice';

export const store = configureStore({
  reducer: {    
    facts: factsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
