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
            <img src="/icons/runner.png"></img>
            <span>Are you there yet? We know you want to hit the open road. Keep racking up in-car miles to unlock this bagde!</span>
        </div>
      </div>
    </div>
  );
}

export default Modal1;