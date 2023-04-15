import React from "react";
import "./styles.css"

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="close"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          Upload a photo
        </div>
        <div className="upload">
            <button>
                <img src="/icons/image-.png"></img>
                <div>Click here or drag and drop to choose a photo.</div>
            </button>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
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

export default Modal;