import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const SignedIn = () => (
  <Nav>
    <Nav.Link as={Link} to="/signout">
      Sign Out
    </Nav.Link>
    <Nav.Link as={Link} to="/">Tashfeen</Nav.Link>
  </Nav>
);

export default SignedIn;
