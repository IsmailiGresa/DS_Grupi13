import React, { useState } from "react";
import "./styles.css"
import axios from "../api/axios";

function Modal({ setOpenModal }) {

  const [avatar, setAvatar] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('avatar', avatar);

      await axios.post('/api/uploadavatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Avatar uploaded successfully');
    } catch (error) {
      console.error('Error uploading avatar', error);
    }
  };


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
        <div className="upl">
              <img src="/icons/image-.png"></img>
              <input id="image" type="file" name="avatar" onChange={handleFileChange}></input>
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
          <button type="submit" onClick={handleSubmit}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;