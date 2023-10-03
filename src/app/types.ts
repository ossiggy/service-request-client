import store from './store';

export interface AddressType {
  houseNumber: string;
  streetName: string;
  city: string;
  stateOrProvince: string;
  country: string;
  postalCode: string;
}

export interface ContactType {
  email: string;
  address?: AddressType;
  phoneNumber?: string;
}

export interface CustomerNameType {
  firstName: string;
  lastName?: string;
}

export interface ServiceRequestType {
  id: string;
  customerName: CustomerNameType;
  contactInfo: ContactType;
  requestedService: string;
  status: string;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
