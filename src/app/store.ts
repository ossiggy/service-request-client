import { configureStore } from '@reduxjs/toolkit';
import { serviceRequestReducer } from './slices';

const store = configureStore({
  reducer: {
    serviceRequests: serviceRequestReducer
  }
});

export default store;
