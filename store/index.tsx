import { configureStore } from '@reduxjs/toolkit';
import slideReducer from './slide';

const store = configureStore({
  reducer: { slide: slideReducer },
});

export default store;
