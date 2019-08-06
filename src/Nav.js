import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink to="/checklist" activeClassName="active" className="nav-link">Checklist</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active" className="nav-link">Log</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/settings" activeClassName="active" className="nav-link">Settings</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
