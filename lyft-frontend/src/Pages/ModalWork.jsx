import React from "react";
import "./ModalSc.css"
import { useState } from "react";
import axios from "../api/axios";

function ModalWork({ setOpenModal6 }) {
  const [workLocation, setWorkLocation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');
        setSuccess('');

        axios.post('/api/shortcuts', {
                work_location: workLocation,
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
              setOpenModal6(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          Adding work address
        </div>
        <div className="upload">

            <input type="text" placeholder="    Enter the address*" required value={workLocation} onChange={(e) => setWorkLocation(e.target.value)}></input>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal6(false);
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

export default ModalWork;