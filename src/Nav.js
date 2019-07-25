import React from 'react';

const Nav = () => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Log <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Settings
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Checklist
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
