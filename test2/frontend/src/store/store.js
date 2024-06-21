import { configureStore, combineReducers } from '@reduxjs/toolkit';
import servicesReducer from './servicesSlice.js';

const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
})

export default store;