import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const SignedOut = () => (
  <Nav>
    <Nav.Link as={Link} to="signin">SignIn</Nav.Link>
    <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
  </Nav>
);

export default SignedOut;
