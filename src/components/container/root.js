import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import SignUp from '../presentational/SignUp';
import Navbar from '../presentational/Navbar';

const root = () => (
  <Router>
    <Route path="/" component={Navbar} />
    <Route exact path="/" component={App} />
    <Route exact path="/signup" component={SignUp} />
  </Router>
);

export default root;
