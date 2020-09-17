import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signUpSubmit = e => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };
  return (
    <Form onSubmit={signUpSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Signin
      </Button>
    </Form>
  );
};

export default SignUp;
