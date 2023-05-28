import React, { useState } from "react";
import "./styles.css";
import axios from "../api/axios";

function Modal({ setOpenModal }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      const response = await axios.post("/api/uploadavatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // Handle the response as needed
      console.log(response.data);

      // Reset the selectedImage state
      setSelectedImage(null);
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            className="close"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">Upload a photo</div>
        <div className="upl">
          <img src="/icons/image-.png"></img>
          <input type="file" accept="image/*" onChange={handleImageChange} />
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
          <button type="submit" onClick={handleSubmit}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
