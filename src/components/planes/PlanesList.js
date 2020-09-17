import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import PlaneSummary from './PlaneSummary';

export default function PlanesList() {
  return (
    <CardDeck>
      <PlaneSummary />
      <PlaneSummary />
      <PlaneSummary />
    </CardDeck>
  );
}
