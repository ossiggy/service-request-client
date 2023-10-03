import { Form, FormGroup, Label, Input } from 'reactstrap';

export const TicketForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input id="firstName" name="firstName" placeholder="First Name" plaintext />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input id="lastName" name="lastName" placeholder="Last Name" plaintext />
      </FormGroup>
      <FormGroup>
        <Label for="customerEmail">Email</Label>
        <Input id="exampleEmail" name="email" placeholder="with a placeholder" type="email" />
      </FormGroup>
      <FormGroup>
        <Label for="houseNumber">House Number</Label>
        <Input id="houseNumber" name="houseNumber" placeholder="123" plaintext />
      </FormGroup>
      <FormGroup>
        <Label for="houseNumber">House Number</Label>
        <Input id="houseNumber" name="houseNumber" placeholder="123" plaintext />
      </FormGroup>
    </Form>
  );
};
