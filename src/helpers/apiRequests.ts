import { API_URL } from '../config';
import type { ServiceRequestType } from '../app/types';

export const postTicket = async (data: ServiceRequestType) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const getAllTickets = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
