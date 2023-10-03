import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from 'reactstrap';
import { ServiceRequestType } from '../../app/types';

interface TicketCardProps {
  ticket: ServiceRequestType;
}

export const TicketCard = ({ ticket }: TicketCardProps) => {
  return (
    <Card className="ticket-card">
      <CardBody>
        <CardTitle tag="h5">{ticket.id}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {ticket.status}
        </CardSubtitle>
      </CardBody>
      <CardBody>
        <Row>
          <Col>
            <CardText>{ticket.requestedService}</CardText>
          </Col>

          <Col>
            <Button>View</Button>
          </Col>
          <Col>
            <Button>Delete</Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
