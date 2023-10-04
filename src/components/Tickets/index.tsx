import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectServiceRequests, fetchTickets } from '../../app';
import { Row, Col } from 'reactstrap';
import { TicketCard } from './TicketCards';
import type { ClickHandlerType } from '../types';

import './Tickets.css';

interface TicketsProps {
  handleUpdateModal: ClickHandlerType;
  newContent: boolean;
  handleNewContent: () => void;
}

export const Tickets = ({ handleUpdateModal, handleNewContent, newContent }: TicketsProps) => {
  const dispatch = useAppDispatch();
  const tickets = useAppSelector(selectServiceRequests);
  
  useEffect(() => {
    if (newContent) {
      dispatch(fetchTickets());
    }
    handleNewContent();
  }, [dispatch, newContent]);
  
  let display;
  if (tickets?.length) {
    display = tickets.map(ticket => {
      return (
        <Col key={ticket.id} className="ticket-card-container">
          <TicketCard ticket={ticket} handleUpdateModal={handleUpdateModal} />
        </Col>
      );
    });
  }
  
  return (
    <Row id="tickets-container" xs="1" sm="2" md="4">
      {display}
    </Row>
  );
};

export { TicketModal } from './TicketModal';