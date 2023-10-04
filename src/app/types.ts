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
  phoneNumber?: string;
}

export interface CustomerNameType {
  firstName: string;
  lastName?: string;
}

export interface ServiceRequestType {
  id?: string;
  customerName: CustomerNameType;
  contactInfo: ContactType;
  address: AddressType;
  requestedService: string;
  status: string;
  error?: any;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
