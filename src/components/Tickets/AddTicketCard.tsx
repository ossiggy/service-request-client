import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import './Tickets.css';

export const AddTicketCard = () => {
  return (
    <Card className="ticket-card">
      <CardBody>
        <CardTitle tag="h5">Add a ticket</CardTitle>
      </CardBody>
      <CardBody>
        <Button>Add</Button>
      </CardBody>
    </Card>
  );
};
