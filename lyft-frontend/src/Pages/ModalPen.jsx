import React from "react";
import "./ModalPen.css";

function ModalPen({ setOpenModal4 }) {
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
            <input type="text" id="name" placeholder="Enter your name..."></input>
            </div>
            <input type="text" id="surname" placeholder="Enter your lastname..."></input>
          </div>
          <div className="info1">
            <input type="email" id="email" placeholder="Enter your email address..."></input>
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
          <button>Update</button>
        </div>
      </div>
    </div>
  );
}

export default ModalPen;