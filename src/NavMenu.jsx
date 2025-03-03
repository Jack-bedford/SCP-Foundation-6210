import React from 'react';
import { Link } from 'react-router-dom';
import { scps } from './scp.js';
import Home from './home.jsx';


function NavMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-dark border-bottom text-white">
      <div className="container-fluid ">
        <Link className="navbar-brand text-white" to="/">SCP Foundation</Link>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          {scps && scps.length > 0 ? (  // ✅ Prevents errors if `scps` is undefined
              scps.map(scp => (
                <li key={scp.Name} className="nav-item">
                  <Link to={`/scp/${scp.Name}`} className="nav-link text-white">
                    {scp.Class} - {scp.Name}
                  </Link>
                </li>
              ))
            ) : (
              <li className="nav-item text-white">Loading SCPs...</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
