import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import PlaneSummary from './PlaneSummary';

export default function PlanesList({ planes }) {
  return (
    <CardDeck>
      {planes
      && planes.map(plane => (
        <PlaneSummary
          plane={plane}
          key={plane.id}
        />
      ))}
    </CardDeck>
  );
}
