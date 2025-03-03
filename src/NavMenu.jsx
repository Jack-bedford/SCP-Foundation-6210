import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { scps } from './scp.js';

function NavMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-dark border-bottom text-white">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">SCP Foundation</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {scps && scps.length > 0 ? (
              scps.map(scp => (
                <li key={scp.Name} className="nav-item">
                  <NavLink 
                    to={`/scp/${scp.Name}`} 
                    className="nav-link text-white" 
                    activeClassName="active"
                  >
                    {scp.Class} - {scp.Name}
                  </NavLink>
                </li>
              ))
            ) : (
              <li className="nav-item text-white">
                <div className="spinner-border text-white" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
