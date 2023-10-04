import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { TicketForm } from '../TicketForm';
import type { ClickHandlerType, SubmitHandlerType } from '../../types';
import { ServiceRequestType } from '../../../app/types';

import './TicketModal.css';

interface TicketModalProps {
  isOpen: boolean;
  ticket: ServiceRequestType | null;
  handleCloseModal: ClickHandlerType;
  handleSubmit: SubmitHandlerType;
}

export const TicketModal = ({ isOpen, ticket, handleSubmit, handleCloseModal }: TicketModalProps) => {
  const headerText = ticket?.id || 'Create a new ticket';

  const closeBtn = (
    <Button onClick={handleCloseModal} color="danger">
      X
    </Button>
  );

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader id="modal-header" close={closeBtn}>
        {headerText}
      </ModalHeader>
      <ModalBody>
        <TicketForm handleSubmit={handleSubmit} handleCloseModal={handleCloseModal} />
      </ModalBody>
    </Modal>
  );
};
