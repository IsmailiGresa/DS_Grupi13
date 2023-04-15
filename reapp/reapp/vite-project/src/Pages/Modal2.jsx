import React from "react";
import "./Modal123.css"

function Modal2({ setOpenModal2 }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="close"
            onClick={() => {
              setOpenModal2(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          Five - Star Rides
        </div>
        <div className="upload">
            <button>
                <img src="/icons/image-.png"></img>
                <div>5 Star Rider</div>
            </button>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal2(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Modal2;