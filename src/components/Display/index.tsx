import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import { Tickets } from '../Tickets';
import { selectServiceRequests } from '../../app';

export const Display = () => {
  const tickets = useSelector(selectServiceRequests);
  let display = <div>Loading...</div>;
  if (tickets?.length) {
    console.log('display tickets', tickets);
    display = <Tickets tickets={tickets} />;
  }
  return <Container id="display-container">{display}</Container>;
};
