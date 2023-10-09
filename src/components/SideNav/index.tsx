import { useState } from 'react';
import { Collapse, Navbar, Button, Nav, NavItem, NavLink } from 'reactstrap';

import './SideNav.scss';

export const SideNav = () => {
  return (
    <Navbar id="side-nav-container">
      <Nav id="side-nav" vertical>
        <NavItem className="side-nav-item">
          <NavLink href="/tickets">Tickets</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
