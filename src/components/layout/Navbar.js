import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Signedin from './SignedIn';
import Signedout from './SignedOut';

const NavbarComp = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/">
      Home
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <Nav>
          <Signedin />
          <Signedout />
          <Nav.Link as={Link} to="/createplane">Create Plane</Nav.Link>
        </Nav>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarComp;
