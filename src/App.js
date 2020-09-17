import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/planes/ProjectDetail';
import Signin from './components/auth/Signin';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/planes/:id" component={ProjectDetail} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
