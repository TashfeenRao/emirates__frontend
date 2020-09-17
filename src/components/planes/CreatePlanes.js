import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const CreatePlanes = () => {
  const [title, setTitle] = useState('');
  const [sumarry, setSumarry] = useState('');
  const createSubmit = e => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={createSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Sumarry</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={e => {
            setSumarry(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
};

export default CreatePlanes;
