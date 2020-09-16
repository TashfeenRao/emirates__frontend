import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <h1>Welcome to dashboard</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
