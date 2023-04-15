import React from "react";
import "./Modal123.css"

function Modal1({ setOpenModal1 }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="close"
            onClick={() => {
              setOpenModal1(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          Marathoner
        </div>
        <div className="upload">
            <button>
                <div>Marathoner</div>
            </button>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal1(false);
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

export default Modal1;