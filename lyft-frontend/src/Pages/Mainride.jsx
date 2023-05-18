import React, { useState } from 'react';
import './mainride.css';
import { useNavigate } from 'react-router-dom';
import './sidebarBtn.css';
import { useRef as myUseRef } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
// import Rides from './Rides';
// import Payment from "./Payment.jsx";
// import Giftcards from "./Giftcards.jsx";
// import Promos from "./Promos.jsx";
// import Invite from "./Invite.jsx";
// import Donate from "./Donate";
// // import Settings
// import Logout from "./Logout.jsx";

function Mainride() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [open, setOpen]=useState(false);
    const [showRedeemWindow, setShowRedeemWindow] = useState(false);
    const navigate = useNavigate();
    const lastScrollTop =myUseRef(0);
    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

    const onMapLoad = (map) => {
        // Get the current map center
        const center = map.getCenter();

        // Update the state with the new map center
        setMapCenter({ lat: center.lat(), lng: center.lng() });
    };



    return (
        <>
            <GoogleMap
                mapContainerStyle={{ height: '400px', width: '100%' }}
                zoom={8}
                center={mapCenter}
                onLoad={onMapLoad}
            >
                <Marker position={mapCenter} />
            </GoogleMap>
        <div>
            <nav className={`${isNavbarVisible ? "visible" : ""}`}>
                <div className="nav-items">
                    <a>Ulyft</a>
                </div>
                <div className="nav-items1">
                    <div className="menu-container">
                        <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
                            <img src="/icons/profile.png" alt="" />
                        </div>
                        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>

                         <img src="/icons/profile.png" alt=""></img>
                                      <a>Gresa Ismaili </a>
                            <ul>
                                {/*<li>*/}
                                {/*    <button className="dropdown-btn" onClick={() => {*/}
                                {/*        navigate("/mainride");*/}
                                {/*    }}>*/}
                                {/*        <img src="/icons/ride.png" alt=""/>*/}
                                {/*        <a>Get a ride</a>*/}
                                {/*    </button>*/}
                                {/*</li>*/}
                                <li>
                                    <button className="dropdown-btn" onClick={() => {
                                        navigate("/rides");
                                    }}>
                                        <img src="/icons/clock.png" alt=""/>
                                        <a>Rides</a>
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-btn" onClick={() => {
                                        navigate("/payment");
                                    }}>
                                        <img src="/icons/payment.png" alt=""/>
                                        <a>Payment</a>
                                    </button>
                                </li>

                                <li>
                                    <button className="dropdown-btn" onClick={() => {
                                        navigate("/giftcards");
                                    }}>
                                        <img src="/icons/gift_card.png" alt=""/>
                                        <a>Gift cards</a>
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-btn" onClick={() => {
                                        navigate("/promos");
                                    }}>
                                        <img src="/icons/promos.png" alt=""/>
                                        <a>Promos</a>
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-btn" onClick={() => {
                                        navigate("/invite");
                                    }}>
                                        <img src="/icons/invite.png" alt=""/>
                                        <a>Invite friends</a>
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-btn" onClick={() => {
                                        navigate("/donate");
                                    }}>
                                        <img src="/icons/donation.png" alt=""/>
                                        <a>Donate</a>
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-btn" onClick={() => {
                                        navigate("/profile");
                                    }}>
                                        <img src="/icons/settings.png" alt=""/>
                                        <a>Settings</a>
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-btn" onClick={() => {
                                        navigate("/logout");
                                    }}>
                                        <img src="/icons/profile.png" alt=""/>
                                        <a>Log out</a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>


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
                            <img src="/icons/location-pin.png" alt="map marker" className="input-icon" />
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
                            <img src="/icons/location-pin.png" alt="map marker" className="input-icon" />
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
            </>
    );
}



export default Mainride;

