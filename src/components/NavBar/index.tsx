import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';

import './navbar.css';

export const NavBar = () => {
  return (
    <div id="navbar">
      <Navbar>
        <NavbarBrand href="/">Service Request</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Button>Create Ticket</Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
