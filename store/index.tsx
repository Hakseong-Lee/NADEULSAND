import { configureStore } from '@reduxjs/toolkit';
import slideReducer from './slider';

const store = configureStore({
  reducer: { slide: slideReducer },
});

export default store;
