import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NavMenu from './NavMenu.jsx';
import Scp from './scp.jsx';
import { scps } from './scp';  
import Home from './home.jsx'; 
import './App.css';

function ScpWrapper() {
  // Get the SCP Name from the URL params
  const { Name } = useParams();
  return <Scp Name={Name} />;
}


function App() {
  return (
    <Router>
      <div className="bg-dark p-3">
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add Home Route */}
          <Route path="/scp/:Name" element={<ScpWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
