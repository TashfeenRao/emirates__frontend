import React from 'react';
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
