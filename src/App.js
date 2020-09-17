import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/planes/ProjectDetail';
import Signin from './components/auth/Signin';
import SignUp from './components/auth/SignUp';
import CreatePlanes from './components/planes/CreatePlanes';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/planes/:id" component={ProjectDetail} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/createplane" component={CreatePlanes} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
