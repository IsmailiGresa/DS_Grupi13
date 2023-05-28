import React from "react";
import "./ModalSc.css"
import { useState } from "react";
import axios from "../api/axios";

function ModalWork({ setOpenModal6 }) {
  
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

            <input type="text" placeholder="    Enter the address*" 
            value={updatedUser.work_address || ''}
            onChange={e => setUpdatedUser({ ...updatedUser, work_address: e.target.value })}></input>
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
          <button onClick={updateUser}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ModalWork;