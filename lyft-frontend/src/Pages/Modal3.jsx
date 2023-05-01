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
        <img src="/icons/tip.png"></img>
        <span>Had a good ride? Say thanks to your driver with a tip. The more you tip, the closer you’ll be to unlocking this badge.</span>
        </div>
      </div>
    </div>
  );
}

export default Modal3;