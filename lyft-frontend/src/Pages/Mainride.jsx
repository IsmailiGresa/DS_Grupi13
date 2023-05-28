import React, { useState, useEffect } from "react";
import "./mainride.css";
import { useNavigate } from "react-router-dom";
import "./sidebarBtn.css";
import { useRef as myUseRef } from "react";
import axios from "../api/axios";
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

function Mainride() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [showRedeemWindow, setShowRedeemWindow] = useState(false);
  const navigate = useNavigate();
  const lastScrollTop = myUseRef(0);
  const [mapCenter, setMapCenter] = useState({ lat: 42.6431, lng: 20.6922 });
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [directions, setDirections] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const onMapLoad = (map) => {
    const center = map.getCenter();
    const newMapCenter = { lat: 42.6431, lng: 20.6922 };
    setMapCenter(newMapCenter);
  };

  const handlePickupChange = (event) => {
    setPickupLocation(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleEstimateClick = () => {
    if (pickupLocation && destination) {
      calculateDirections();
    }
  };

  const calculateDirections = () => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: pickupLocation,
        destination: destination,
        travelMode: "DRIVING",
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
          setShowModal(true);
        } else {
          console.error("Directions request failed:", status);
        }
      }
    );
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [users, setUser] = useState([]);
    useEffect(() => {
        axios.get('/api/users', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(response => {
            setUser(response.data.user);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

  return (
    <>
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={{ height: "100vh", width: "100%" }}
          zoom={8}
          center={mapCenter}
          onLoad={onMapLoad}
        >
          {directions && <DirectionsRenderer directions={directions} />}
          <Marker position={mapCenter} />
        </GoogleMap>
      </div>
      <div>
        <nav className={`${isNavbarVisible ? "visible" : ""}`}>
          <div className="nav-items">
            <a>Ulyft</a>
          </div>
          <div className="nav-items1">
            <div className="menu-container">
              <div
                className="menu-trigger"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <img src="/icons/profile.png" alt="" />
              </div>
              <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                <img src="/icons/profile.png" alt=""></img>
                <a>{users.first_name} {users.last_name}</a>
                <ul className="dropdown-menu-list5">
                  <li>
                    <button
                      className="dropdown-btn"
                      onClick={() => {
                        navigate("/rides");
                      }}
                    >
                      <img src="/icons/clock.png" alt="" />
                      <a>Rides </a>
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-btn"
                      onClick={() => {
                        navigate("/payment");
                      }}
                    >
                      <img src="/icons/payment.png" alt="" />
                      <a>Payment</a>
                    </button>
                  </li>

                  <li>
                    <button
                      className="dropdown-btn"
                      onClick={() => {
                        navigate("/giftcards");
                      }}
                    >
                      <img src="/icons/gift_card.png" alt="" />
                      <a>Gift cards</a>
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-btn"
                      onClick={() => {
                        navigate("/promos");
                      }}
                    >
                      <img src="/icons/promos.png" alt="" />
                      <a>Promos</a>
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-btn"
                      onClick={() => {
                        navigate("/invite");
                      }}
                    >
                      <img src="/icons/invite.png" alt="" />
                      <a>Invite friends</a>
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-btn"
                      onClick={() => {
                        navigate("/donate");
                      }}
                    >
                      <img src="/icons/donation.png" alt="" />
                      <a>Donate</a>
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-btn"
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      <img src="/icons/settings.png" alt="" />
                      <a>Settings</a>
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-btn"
                      onClick={() => {
                        localStorage.clear();
                        navigate('/login')
                      }}
                    >
                      <img src="/icons/profile.png" alt="" />
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
                <img
                  src="/icons/location-pin.png"
                  alt="map marker"
                  className="input-icon"
                />
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  className="input-field"
                  placeholder="Enter pickup location"
                  value={pickupLocation}
                  onChange={handlePickupChange}
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="destination" className="input-label">
                DESTINATION
              </label>
              <div className="input-wrapper">
                <img
                  src="/icons/location-pin.png"
                  alt="map marker"
                  className="input-icon"
                />
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  className="input-field"
                  placeholder="Enter destination"
                  value={destination}
                  onChange={handleDestinationChange}
                />
              </div>
            </div>
            <button className="estimate-button" onClick={handleEstimateClick}>
              Get estimate
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Estimate Details</h2>
              <div className="person-icon">
                <img src="/icons/person-icon.png" alt="Person Icon" />
                <span>3</span>
              </div>
            </div>
            <ul className="car-list">
              <li>
                <button
                  className="car-button"
                  onClick={() => handleCarSelection("Car Model 1")}
                >
                  <div className="car-info">
                    <img src="/icons/car-icon.png" alt="Car Icon" />
                    <div>
                      <h3>Car Model 1</h3>
                      <div className="passenger-info">
                        <img src="/icons/person-icon.png" alt="Person Icon" />
                        <span>4 passengers</span>
                      </div>
                    </div>
                  </div>
                  <p className="price">$20</p>
                </button>
              </li>
              <li>
                <button
                  className="car-button"
                  onClick={() => handleCarSelection("Car Model 2")}
                >
                  <div className="car-info">
                    <img src="/icons/car-icon.png" alt="Car Icon" />
                    <div>
                      <h3>Car Model 2</h3>
                      <div className="passenger-info">
                        <img src="/icons/person-icon.png" alt="Person Icon" />
                        <span>6 passengers</span>
                      </div>
                    </div>
                  </div>
                  <p className="price">$30</p>
                </button>
              </li>
              <li>
                <button
                  className="car-button"
                  onClick={() => handleCarSelection("Car Model 3")}
                >
                  <div className="car-info">
                    <img src="/icons/car-icon.png" alt="Car Icon" />
                    <div>
                      <h3>Car Model 3</h3>
                      <div className="passenger-info">
                        <img src="/icons/person-icon.png" alt="Person Icon" />
                        <span>5 passengers</span>
                      </div>
                    </div>
                  </div>
                  <p className="price">$25</p>
                </button>
              </li>
            </ul>
            <button className="close-button" onClick={closeModal}>
              {/*me ndrru*/}
              Select the car
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Mainride;
