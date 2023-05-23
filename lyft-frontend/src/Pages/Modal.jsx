import React, { useState } from "react";
import "./styles.css"
import Axios from "axios";

function Modal({ setOpenModal }) {

  const[imagedata, setImagedata] = useState('');
  const handleChange = file => {
    setImagedata(file[0]);
  }
  const sumbitData = e => {
    e.preventDefault();
    const fData = new FormData();
    fData.append('image', imagedata);

    Axios.post('http://127.0.0.1:8000/api/upload-image', fData)
    .then(res => {
      console.log('response', res);
    }).catch(e => {
      console.error('Fail', e);
    });
  }

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
        <div className="upl" onSubmit={sumbitData}>
              <img src="/icons/image-.png"></img>
              <input name="image" id="image" type="file" onChange={e => handleChange(e.target.files)}></input>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn">
            Cancel
          </button>
          <button type="submit" onClick={sumbitData}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;