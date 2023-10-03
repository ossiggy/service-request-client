import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from 'reactstrap';
import { ServiceRequestType } from '../../app/types';

interface TicketTileProps {
  ticket: ServiceRequestType;
}

export const TicketTile = ({ ticket }: TicketTileProps) => {
  return (
    <Card
      style={{
        width: '18rem'
      }}
    >
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
