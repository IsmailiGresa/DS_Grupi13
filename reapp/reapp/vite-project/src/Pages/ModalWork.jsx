import React from "react";
import "./ModalSc.css"

function ModalWork({ setOpenModal6 }) {
  return (
    <div className="modalBackgr">
      <div className="modalCont">
        <div className="titleBtn">
          <button className="close"
            onClick={() => {
              setOpenModal6(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          Adding work address
        </div>
        <div className="upload">

            <input type="text" placeholder="    Enter the address*" required></input>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal6(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ModalWork;