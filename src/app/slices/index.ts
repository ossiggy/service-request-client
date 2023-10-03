import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ServiceRequestType } from '../types';

interface ServiceRequests {
  tickets: ServiceRequestType[] | [];
}

const initialState: ServiceRequests = {
  tickets: []
};

export const serviceRequestSlice = createSlice({
  name: 'serviceRequests',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ServiceRequestType>) => {
      state.tickets = [...state.tickets, action.payload];
    },
    update: (state, action: PayloadAction<ServiceRequestType[]>) => {
      state.tickets = action.payload;
    },
    reset: state => {
      state.tickets = [];
    }
  }
});

export const {
  reducer: serviceRequestReducer,
  actions: { add, update, reset }
} = serviceRequestSlice;
