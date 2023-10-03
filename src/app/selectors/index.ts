import type { RootState } from '../types';
export const selectServiceRequests = (state: RootState) => state.serviceRequests.tickets;
