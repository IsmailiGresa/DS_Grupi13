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
                <img src="/icons/rating.png"></img>
                <span>Shine on, you beautiful diamond. Earn a five-star rating to unlock this badge!</span>
        </div>
      </div>
    </div>
  );
}

export default Modal2;