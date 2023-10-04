import { useState } from 'react';
import { Form, Button, Container } from 'reactstrap';
import { InputGroups } from './InputGroups';
import { formFields } from './formFields';
import type { ChangeHandlerType, SubmitHandlerType, ClickHandlerType } from '../../types';
import type { ServiceRequestType } from '../../../app/types';

import './TicketForm.css';

interface TicketFormProps {
  handleSubmit: SubmitHandlerType;
  handleCloseModal: ClickHandlerType;
  ticket?: ServiceRequestType;
}

export const TicketForm = ({ handleSubmit, handleCloseModal, ticket }: TicketFormProps) => {
  const [fields, setFields] = useState<Record<string, any>>({
    status: 'Requested'
  });

  const handleChange: ChangeHandlerType = (e, parentKey) => {
    setFields(prevState => {
      const updatedFields = { ...prevState };

      if (parentKey && updatedFields[parentKey] instanceof Object) {
        updatedFields[parentKey] = {
          ...updatedFields[parentKey],
          [e.target.name]: e.target.value
        };
      } else if (parentKey && !updatedFields[parentKey]) {
        updatedFields[parentKey] = {
          [e.target.name]: e.target.value
        };
      } else {
        updatedFields[e.target.name] = e.target.value;
      }

      return updatedFields;
    });
  };

  return (
    <Form onSubmit={e => handleSubmit(e, fields)}>
      {Object.keys(formFields).map((field, i) => {
        const currentValues = ticket && ticket[field as keyof ServiceRequestType];
        return (
          <div key={`input-group-${i}`}>
            <InputGroups formFields={formFields[field as keyof typeof formFields]} currentValues={currentValues} handleChange={handleChange} />
          </div>
        );
      })}
      <Container id="form-button-container">
        <Button type="submit" color="primary">
          Submit
        </Button>
      </Container>
    </Form>
  );
};
