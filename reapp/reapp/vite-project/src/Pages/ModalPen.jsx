import React from "react";
import "./ModalPen.css";

function ModalPen({ setOpenModal4 }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
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
        <div className="upload">
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name..."></input>

            <label for="surname">Last Name:</label>
            <input type="text" id="surname" placeholder="Enter your lastname..."></input>

            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email address..."></input>
        </form>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal4(false);
            }}
            id="cancelBtn"
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