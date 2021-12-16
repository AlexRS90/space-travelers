import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import './navbar.css';

const Navbar = () => (
  <Router>
    <nav className="navbar navbar-light bg-light p-3" data-testid="nav">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" className="me-3" width="30" height="24" />
          Space Travelers Hub
        </a>
        <ul className="nav-menu">
          <li><NavLink to="/rockets" activeclassname="active">Rockets</NavLink></li>
          <li><NavLink to="/missions" activeclassname="active">Missions</NavLink></li>
          <li><NavLink to="/myProfile" activeclassname="active">My Profile</NavLink></li>
        </ul>
      </div>
    </nav>
  </Router>

);

export default Navbar;
