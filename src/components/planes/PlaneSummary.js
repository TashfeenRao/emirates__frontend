import React from 'react';
import Card from 'react-bootstrap/Card';

export default function PlaneSummary({ plane }) {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>{plane.title}</Card.Title>
        <Card.Text>
          {plane.description}
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}
