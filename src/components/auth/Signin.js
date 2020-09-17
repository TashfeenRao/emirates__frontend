import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signinSubmit = e => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={signinSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          onChange={e => { setUsername(e.target.value); }}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={e => { setPassword(e.target.value); }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Signin
      </Button>
    </Form>
  );
};
export default Signin;
