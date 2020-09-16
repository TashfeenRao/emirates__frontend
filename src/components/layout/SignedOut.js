import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const SignedOut = () => (
  <Nav>
    <Nav.Link to="/signout">
      Login
    </Nav.Link>
    <Nav.Link>SignUp</Nav.Link>
  </Nav>
);

export default SignedOut;
