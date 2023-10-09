import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectServiceRequests, fetchTickets } from '../../app';
import { Row, Col } from 'reactstrap';
import { TicketCol } from './TicketCol';
import type { ClickHandlerType } from '../types';
import type { ServiceRequestType } from '../../app/types';

import './Tickets.scss';

interface TicketsProps {
  handleUpdateModal: ClickHandlerType;
  newContent: boolean;
  handleNewContent: () => void;
}

export const Tickets = ({ handleUpdateModal, handleNewContent, newContent }: TicketsProps) => {
  const dispatch = useAppDispatch();
  const tickets = useAppSelector(selectServiceRequests);
  const [sortedTickets, setSortedTickets] = useState<Record<string, ServiceRequestType[]>>({});

  useEffect(() => {
    if (newContent) {
      dispatch(fetchTickets());
    }
    handleNewContent();
  }, [dispatch, newContent]);

  useEffect(() => {
    if (tickets) {
      const sortedTicketsTemp: Record<string, ServiceRequestType[]> = {};
      const ticketStatusTypes = [...new Set(tickets?.map(ticket => ticket.status))];
      ticketStatusTypes.forEach(status => {
        sortedTicketsTemp[status] = tickets.filter(ticket => ticket.status === status);
      });

      setSortedTickets(sortedTicketsTemp);
    }
  }, [tickets]);

  let display;

  if (Object.keys(sortedTickets).length) {
    display = Object.keys(sortedTickets).map(ticketStatusType => {
      return (
        <TicketCol key={ticketStatusType} title={ticketStatusType} tickets={sortedTickets[ticketStatusType]} handleUpdateModal={handleUpdateModal} />
      );
    });
  }

  return (
    <Row>
      <Col>
        <Row id="tickets-container">{display}</Row>
      </Col>
    </Row>
  );
};
