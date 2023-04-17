import React from "react";
import "./Modal123.css"

function Modal3({ setOpenModal3 }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="close"
            onClick={() => {
              setOpenModal3(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          Top Tiper
        </div>
        <div className="upload">
            <button>
                <div>Top Tiper</div>
            </button>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal3(false);
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

export default Modal3;