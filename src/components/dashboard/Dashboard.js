/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlanesList from '../planes/PlanesList';

class Dashboard extends Component {
  render() {
    const { planes } = this.props;
    console.log(planes);
    return (
      <div>
        <h1>Welcome to dashboard</h1>
        <PlanesList planes={planes} />
      </div>
    );
  }
}
const mapStateToProps = state => ({ planes: state.plane.planes });
export default connect(mapStateToProps)(Dashboard);
