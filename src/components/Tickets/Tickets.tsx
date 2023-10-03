import { Row, Col } from 'reactstrap';
import { TicketCard } from './TicketCard';
import { AddTicketCard } from './AddTicketCard';
import type { ServiceRequestType } from '../../app/types';

import './Tickets.css';

interface TicketsProps {
  tickets: ServiceRequestType[];
}

export const Tickets = ({ tickets }: TicketsProps) => {
  let display;
  if (tickets?.length) {
    display = tickets.map(ticket => {
      return (
        <Col key={ticket.id} className="ticket-card-container">
          <TicketCard ticket={ticket} />
        </Col>
      );
    });
  }

  return (
    <Row id="tickets-container" xs="1" sm="2" md="4">
      <Col className="ticket-card-container">
        <AddTicketCard />
      </Col>
      {display}
    </Row>
  );
};
