import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTickets, postTicket } from '../../helpers';
import type { ServiceRequestType } from '../types';

interface ServiceRequests {
  tickets: ServiceRequestType[];
}

const initialState: ServiceRequests = {
  tickets: []
};

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => {
  console.log('fetching tickets');
  const response: ServiceRequestType[] = await getAllTickets();
  console.log(response);
  return response;
});

export const createTicket = createAsyncThunk('tickets/createTicket', async (ticket: ServiceRequestType) => {
  console.log('creating ticket');
  const response: ServiceRequestType = await postTicket(ticket);
  console.log(response);
  return response;
});

export const serviceRequestSlice = createSlice({
  name: 'serviceRequests',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createTicket.fulfilled, (state, action: PayloadAction<ServiceRequestType>) => {
      if (!action.payload.error) state.tickets.push(action.payload);
    });
    builder.addCase(fetchTickets.fulfilled, (state, action: PayloadAction<ServiceRequestType[]>) => {
      state.tickets = action.payload;
    });
  }
});

export const { reducer: serviceRequestReducer } = serviceRequestSlice;
