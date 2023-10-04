import { useState } from 'react';
import { Container } from 'reactstrap';
import { useAppDispatch } from '../../hooks';
import { NavBar } from '../NavBar';
import { Tickets } from '../Tickets';
import { TicketModal } from '../Tickets/TicketModal';
import { createTicket } from '../../app';
import type { ServiceRequestType } from '../../app/types';
import type { ClickHandlerType, SubmitHandlerType } from '../types';

import './Display.css';

export const Display = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [newContent, setNewContent] = useState(true);
  const [modalDetails, setModalDetails] = useState<ServiceRequestType | null>(null);

  const handleUpdateModal: ClickHandlerType = (e, ticketDetails) => {
    setModalDetails(prevState => ({
      ...prevState,
      ...ticketDetails
    }));
    setIsOpen(true);
  };

  const handleCloseModal: ClickHandlerType = e => {
    setIsOpen(false);
  };

  const handleSubmit: SubmitHandlerType = async (e, data) => {
    e.preventDefault();
    try {
      console.log('SUBMIT DATA', data);
      await dispatch(createTicket(data));
      setIsOpen(false);
    } catch (err) {
      console.error('failed to createTicket');
    }
  };

  const handleNewContent = () => {
    setNewContent(false);
  };

  return (
    <Container id="display-container">
      <NavBar handleUpdateModal={handleUpdateModal} />
      <TicketModal isOpen={isOpen} ticket={modalDetails} handleSubmit={handleSubmit} handleCloseModal={handleCloseModal} />
      <Tickets handleUpdateModal={handleUpdateModal} handleNewContent={handleNewContent} newContent={newContent} />
    </Container>
  );
};
