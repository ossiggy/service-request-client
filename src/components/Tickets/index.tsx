import { Container, Row, Col } from 'reactstrap';
import { TicketTile } from './TicketTile';
import type { ServiceRequestType } from '../../app/types';

interface TicketsProps {
  tickets: ServiceRequestType[];
}

export const Tickets = ({ tickets }: TicketsProps) => {
  return (
    <Row id="tickets-container" xs="1" sm="2" md="4">
      {tickets.map(ticket => {
        return (
          <Col key={ticket.id} className="ticket-tile-container">
            <TicketTile ticket={ticket} />
          </Col>
        );
      })}
    </Row>
  );
};
