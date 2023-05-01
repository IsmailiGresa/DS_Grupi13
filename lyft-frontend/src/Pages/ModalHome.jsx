import React from "react";
import "./ModalSc.css"

function ModalHome({ setOpenModal5 }) {
  return (
    <div className="modalBackgr">
      <div className="modalCont">
        <div className="titleBtn">
          <button className="close"
            onClick={() => {
              setOpenModal5(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          Adding home address
        </div>
        <div className="upload">
            <input type="text" placeholder="    Enter the address*" required></input>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal5(false);
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

export default ModalHome;