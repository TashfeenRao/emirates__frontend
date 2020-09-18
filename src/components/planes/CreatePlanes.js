import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createPlane } from '../../store/actions/createPlane';

const CreatePlanes = props => {
  const { createPlane } = props;
  const [title, setTitle] = useState('');
  const [sumarry, setSumarry] = useState('');
  const createSubmit = e => {
    e.preventDefault();
    createPlane({ title, sumarry });
    setTitle('');
    setSumarry('');
  };
  return (
    <Form onSubmit={createSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title"
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Sumarry</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Sumarry"
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
const mapDispatchToProps = dispatch => ({
  createPlane: plane => dispatch(createPlane(plane)),
});
export default connect(null, mapDispatchToProps)(CreatePlanes);
