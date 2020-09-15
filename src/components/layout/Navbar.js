import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h1><Link to="/">Home</Link></h1>
    <Link to="/signup">Sign Up</Link>
  </div>
);

export default Navbar;
