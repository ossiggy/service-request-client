import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from 'reactstrap';
import { ServiceRequestType } from '../../../app/types';
import type { ClickHandlerType } from '../../types';

interface TicketCardProps {
  ticket: ServiceRequestType;
  handleUpdateModal: ClickHandlerType;
}

export const TicketCard = ({ ticket, handleUpdateModal }: TicketCardProps) => {
  return (
    <Card className="ticket-card">
      <CardBody>
        <CardTitle tag="h5">{ticket.id}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Status: {ticket.status}
        </CardSubtitle>
        <CardText>Service: {ticket.requestedService}</CardText>
      </CardBody>
      <CardBody>
        <Row>
          <Col>
            <Button color="primary">View</Button>
          </Col>
          <Col>
            <Button onClick={e => handleUpdateModal(e, ticket)} color="warning">
              Edit
            </Button>
          </Col>
          <Col>
            <Button color="danger">Delete</Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
