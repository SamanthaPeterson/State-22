import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

Object.defineProperty(exports, "__esModule", { value: true });  

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
