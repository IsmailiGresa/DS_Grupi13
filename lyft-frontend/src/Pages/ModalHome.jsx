import React from "react";
import "./ModalSc.css";
import { useState } from "react";
import axios from "../api/axios";

function ModalHome({ setOpenModal5 }) {
  const [homeLocation, setHomeLocation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');
        setSuccess('');

        axios.post('/api/shortcuts', {
                home_location: homeLocation,
            })
            .then((response) => {
                setSuccess(response.data.message);
                setHomeLocation('');
            })
            .catch((error) => {
                if (error.response && error.response.data && error.response.data.errors) {
                    setError(error.response.data.errors);
                } else {
                    setError('Something went wrong. Please try again.');
                }
            });
    };

  return (
    <div className="modalBackgr">
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <div className="modalCont" onSubmit={handleSubmit}>
        <div className="titleBtn">
          <button className="close"
            onClick={() => {
              setOpenModal5(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          Adding home address
        </div>
        <div className="upload">
            <input type="text" placeholder="    Enter the address*" required value={homeLocation} onChange={(e) => setHomeLocation(e.target.value)}></input>
        </div>
        <div className="footer">
          <button type="submit"
            onClick={() => {
              setOpenModal5(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ModalHome;