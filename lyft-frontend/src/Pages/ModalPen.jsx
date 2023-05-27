import React from "react";
import "./ModalPen.css";
import axios from "../api/axios";
import { useState } from "react";

function ModalPen({ setOpenModal4 }) {


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
    <div className="backgro">
      <div className="modalContain">
        <div className="CloseBtn">
          <button className="close"
            onClick={() => {
              setOpenModal4(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          Edit account information
        </div>
        <div className="accinfo">
        <div className="information">
          <div className="info">
            <div className="inf">
            <input type="text" id="name" placeholder="Enter your name..." 
            value={updatedUser.first_name || ''}
            onChange={e => setUpdatedUser({ ...updatedUser, first_name: e.target.value })}></input>
            </div>
            <input type="text" id="surname" placeholder="Enter your lastname..."
            value={updatedUser.last_name || ''}
            onChange={e => setUpdatedUser({ ...updatedUser, last_name: e.target.value })}></input>
          </div>
          <div className="info1">
            <input type="email" id="email" placeholder="Enter your email address..."
            value={updatedUser.email || ''}
            onChange={e => setUpdatedUser({ ...updatedUser, email: e.target.value })}></input>
            </div>
        <div className="info2">
            <input type="text" id="phone" placeholder="Enter your phone number..."
            value={updatedUser.phone_number || ''}
            onChange={e => setUpdatedUser({ ...updatedUser, phone_number: e.target.value })}></input>
            </div>
        </div>
        <div className="pronoun">
          <h6>Pronouns</h6>
          <a>Select your pronouns - we'll do our best using them when adressing you!</a>
          <div className="pronouns">
            <div className="hepro">
            <input type="radio" name="pronoun" value="he" id="he" /> 
            <label htmlFor="he">They/Them</label><br />
            </div>
            <div className="shepro">
            <input type="radio" name="pronoun" value="she" id="she" /> 
            <label htmlFor="she">She/Her</label><br />
            </div>
            <div className="theypro">
            <input type="radio" name="pronoun" value="they" id="they" /> 
            <label htmlFor="they">He/Him</label><br />
            </div>
            <div className="otherpro">
            <input type="radio" name="pronoun" value="other" id="other" /> 
            <label htmlFor="other">My pronouns aren't listed</label>
            </div>
            <div className="introv">
            <input type="radio" name="pronoun" value="other" id="other" /> 
            <label htmlFor="other">Prefer not to say</label>
            </div>
          </div>
        </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal4(false);
            }}
            id="cancBtn"
          >
            Cancel
          </button>
          <button onClick={updateUser}>Update </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPen;