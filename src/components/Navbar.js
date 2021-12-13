import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar navbar-light bg-light p-3">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="logo" className="me-3" width="30" height="24" />
        Space Travelers Hub
      </a>
      <ul className="nav-menu">
        <li><NavLink to="/rockets" activeClassName="active">Rockets</NavLink></li>
        <li><NavLink to="/missions" activeClassName="active">Missions</NavLink></li>
        <li><NavLink to="/myProfile" activeClassName="active">My Profile</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
