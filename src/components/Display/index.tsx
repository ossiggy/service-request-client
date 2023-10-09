import { useState } from 'react';
import { Container, Row } from 'reactstrap';
import { useAppDispatch } from '../../hooks';
import { NavBar } from '../NavBar';
import { SideNav } from '../SideNav';
import { Tickets, TicketModal } from '../Tickets';
import { createTicket } from '../../app';
import type { ServiceRequestType } from '../../app/types';
import type { ClickHandlerType, SubmitHandlerType } from '../types';

import './Display.scss';

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

  const handleCloseModal: ClickHandlerType = () => {
    setIsOpen(false);
  };

  const handleSubmit: SubmitHandlerType = async (e, data) => {
    e.preventDefault();
    try {
      await dispatch(createTicket(data));
      setIsOpen(false);
    } catch (err) {
      console.error('failed to createTicket', err);
    }
  };

  const handleNewContent = () => {
    setNewContent(false);
  };

  return (
    <Container id="display-container">
      <NavBar handleUpdateModal={handleUpdateModal} />
      <TicketModal isOpen={isOpen} ticket={modalDetails} handleSubmit={handleSubmit} handleCloseModal={handleCloseModal} />
      <SideNav />
      <Container id="main-display" xs="3">
        <Tickets handleUpdateModal={handleUpdateModal} handleNewContent={handleNewContent} newContent={newContent} />
      </Container>
    </Container>
  );
};
