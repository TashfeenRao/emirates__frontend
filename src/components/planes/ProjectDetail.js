/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProjectDetail = props => {
  const { match } = props;
  const { id } = match.params;
  return (
    <Card className="text-center">
      <Card.Header>
        Featured
        {' '}
        {id}
        {' '}
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};
ProjectDetail.defaultProps = {
  match: {},
  params: {},
};
ProjectDetail.propType = {
  match: PropTypes.shape({}),
  params: PropTypes.shape({ id: PropTypes.string }),
};

export default ProjectDetail;
