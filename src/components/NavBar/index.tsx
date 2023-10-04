import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import type { ClickHandlerType } from '../types';
import './navbar.css';

interface NavBarProps {
  handleUpdateModal: ClickHandlerType;
}

export const NavBar = ({ handleUpdateModal }: NavBarProps) => {
  return (
    <div id="navbar">
      <Navbar>
        <NavbarBrand href="/">Service Request</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Button onClick={handleUpdateModal} color="success">
              Create Ticket
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
