import { Col, Row } from 'reactstrap';
import { TicketCard } from '../TicketCard';
import type { ServiceRequestType } from '../../../app/types';
import type { ClickHandlerType } from '../../types';

import './TicketCol.scss';

interface TicketColProps {
  title: string;
  tickets: ServiceRequestType[];
  handleUpdateModal: ClickHandlerType;
}

export const TicketCol = ({ title, tickets, handleUpdateModal }: TicketColProps) => {
  return (
    <Col className="ticket-col">
      {title}
      {tickets.map(ticket => (
        <Row key={ticket.id}>
          <TicketCard ticket={ticket} handleUpdateModal={handleUpdateModal} />
        </Row>
      ))}
    </Col>
  );
};
