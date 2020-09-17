/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PlanesList from '../planes/PlanesList';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to dashboard</h1>
        <PlanesList />
      </div>
    );
  }
}
