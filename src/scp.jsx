import React from 'react';
import { useParams } from 'react-router-dom';
import { scps } from './scp';  
import './App.css';

const Scp = () => {
    const { Name } = useParams();
    
    // Find the SCP that matches the Name in the URL
    const scp = scps.find(s => s.Name === Name);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-white position-relative text-center bg-dark">
            <div className="position-relative d-inline-block image BoxWidth">
                <img className="img-fluid" src={scp.Image} alt={scp.Name} />
                <div className="fade"></div>
                <div className="position-absolute top-10 start-50 translate-middle text-white p-3 rounded">
                    <h2 class="ShadowOveride">{scp.Name}</h2>
                    <p><strong>Class:</strong> {scp.Class}</p>
                </div>
            </div>
            <br />
            <br />
            
            <p class="BoxWidth"><strong>Containment Procedure:</strong> {scp.Procedure}</p>
            <p class="BoxWidth"><strong>Description:</strong> {scp.Description}</p>
            <div className="border border-Secondary rounded p-3 m-3">
                <p class="BoxWidth"><strong>Reference:</strong> {scp.Reference}</p>
            </div>
            
        </div>
    );
};

export default Scp;
