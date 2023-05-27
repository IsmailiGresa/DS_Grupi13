import React from "react";
import "./ModalSc.css";
import { useState } from "react";
import axios from "../api/axios";

function ModalHome({ setOpenModal5 }) {

  const [updatedUser, setUpdatedUser] = useState({});

  
  const updateUser = () => {
    axios.put('/api/users', updatedUser, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(response => {
        // Handle the successful update
        console.log('User updated:', response.data);
      })
      .catch(error => {
        // Handle the error
        console.log(error);
      });
  };

  return (
    <div className="modalBackgr">
      <div className="modalCont">
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
            <input type="text" placeholder="    Enter the address*" 
            value={updatedUser.home_address || ''}
            onChange={e => setUpdatedUser({ ...updatedUser, home_address: e.target.value })}></input>
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
          <button onClick={updateUser}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ModalHome;