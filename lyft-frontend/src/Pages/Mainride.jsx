import React, { useState } from 'react';
import './mainride.css';
import './styles.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Mainride() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    return (
        <div>
            <nav className={`${isNavbarVisible ? "visible" : ""}`}>
                <div className="nav-items">
                    <button>
                        Sidebar
                    </button>
                    <a>Ulyft</a>
                </div>
                <div className="nav-items1">
                    <button
                        onClick={() => {
                            navigate('/mainride');
                        }}
                    >
                        <a>Gresa</a>
                        <img src="/icons/profile.png" alt="" />
                    </button>
                </div>
            </nav>
            <div className="container">
                <div className="input-container">
                    <h1 className="title">Get a ride in minutes</h1>
                    <div className="input-group">
                        <label htmlFor="pickup" className="input-label">
                            PICKUP LOCATION
                        </label>
                        <div className="input-wrapper">
                            <FaMapMarkerAlt className="input-icon" />
                            <input
                                type="text"
                                id="pickup"
                                name="pickup"
                                className="input-field"
                                placeholder="Enter pickup location"
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="destination" className="input-label">
                            DESTINATION
                        </label>
                        <div className="input-wrapper">
                            <FaMapMarkerAlt className="input-icon" />
                            <input
                                type="text"
                                id="destination"
                                name="destination"
                                className="input-field"
                                placeholder="Enter destination"
                            />
                        </div>
                    </div>
                    <button className="estimate-button">Get estimate</button>
                </div>
            </div>
        </div>
    );
}

export default Mainride;

