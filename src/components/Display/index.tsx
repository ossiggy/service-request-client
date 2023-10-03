import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import { Tickets, AddTicketCard } from '../Tickets';
import { selectServiceRequests } from '../../app';

import './Display.css';

export const Display = () => {
  const tickets = useSelector(selectServiceRequests);

  return (
    <Container id="display-container">
      <Tickets tickets={tickets} />
    </Container>
  );
};
