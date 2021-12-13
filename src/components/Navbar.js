import React from 'react';
import logo from '../images/logo.png';

const Navbar = () => (
  <nav className="navbar navbar-light bg-light p-3">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="logo" className="me-3" width="30" height="24" />
        Space Travelers Hub
      </a>
    </div>
  </nav>
);

export default Navbar;
