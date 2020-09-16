import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const SignedIn = () => (
  <Nav>
    <Nav.Link to="/signout">
      Sign Out
    </Nav.Link>
    <Nav.Link to="/signout">Tashfeen</Nav.Link>
  </Nav>
);

export default SignedIn;
