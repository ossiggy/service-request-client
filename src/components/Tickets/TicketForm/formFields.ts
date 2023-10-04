const customerName = [
  {
    name: 'firstName',
    displayName: 'First Name',
    placeholder: 'First',
    type: 'text',
    parentKey: 'customerName',
    required: true
  },
  {
    name: 'lastName',
    displayName: 'Last Name',
    placeholder: 'Last',
    type: 'text',
    parentKey: 'customerName',
    required: true
  }
];

const contactInfo = [
  {
    name: 'email',
    displayName: 'Email',
    placeholder: 'example@example.com',
    type: 'email',
    parentKey: 'contactInfo',
    required: true
  },
  {
    name: 'phoneNumber',
    displayName: 'Phone Number',
    placeholder: '999-999-9999',
    type: 'text',
    parentKey: 'contactInfo',
    required: true
  }
];

const address = [
  {
    name: 'houseNumber',
    displayName: 'House Number',
    placeholder: '123',
    type: 'text',
    parentKey: 'address',
    required: true
  },
  {
    name: 'streetName',
    displayName: 'Street Name',
    placeholder: 'Fake Street',
    type: 'text',
    parentKey: 'address',
    required: true
  },
  {
    name: 'city',
    displayName: 'City',
    placeholder: 'Townsville',
    type: 'text',
    parentKey: 'address',
    required: true
  },
  {
    name: 'stateOrProvince',
    displayName: 'State or Province',
    placeholder: 'ZZ',
    type: 'text',
    parentKey: 'address',
    required: true
  },
  {
    name: 'country',
    displayName: 'Country',
    placeholder: 'US',
    type: 'text',
    parentKey: 'address',
    required: true
  },
  {
    name: 'postalCode',
    displayName: 'Postal Code',
    placeholder: '12345',
    type: 'text',
    parentKey: 'address',
    required: true
  }
];

const requestedService = [
  {
    name: 'requestedService',
    displayName: 'Requested Service',
    placeholder: 'HVAC',
    type: 'text',
    required: true
  }
];

const status = [
  {
    name: 'status',
    displayName: 'Status',
    placeholder: '',
    type: 'select',
    options: ['Requested', 'Assigned', 'In Progress', 'Delayed', 'Completed', 'Cancelled'],
    required: true
  }
];

export const formFields = { customerName, contactInfo, address, requestedService, status };
