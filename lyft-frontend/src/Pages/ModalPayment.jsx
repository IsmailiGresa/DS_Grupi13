import React, { useEffect, useState } from "react";
import "./ModalPayment.css";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const ModalPayment = ({
  setOpenModalPayment,
  getPaymentMethods,
  information,
  id,
}) => {
  const navigate = useNavigate();
  console.log(information, id);
  const [info, setInfo] = useState({
    cardNumber: information?.card_number ?? "",
    fullName: information?.name ?? "",
    month: information?.month ?? "",
    year: information?.year ?? "",
  });
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
    try {
      setErrMsg("");
      let response = {};
      if (id) {
        response = await axios.patch(`/api/payment-methods/${id}`, info);
      } else {
        response = await axios.post("/api/payment-methods", info);
      }

      if (response.status == 200) {
        setErrMsg("Payment Method have been submitted successfully");
        getPaymentMethods();
        setTimeout(() => {
          setOpenModalPayment(false);
        }, 2000);
      } else {
        // Handle error
        setErrMsg("Payment submission failed");
      }
    } catch (error) {
      setErrMsg("Error submitting payment:".error.message);
    }
  };

  const handleCloseModalPayment = () => {
    setOpenModalPayment(false);
  };

  return (
    <div>
      <div className="paymentModal">
        <div className="paymentModal-content">
          <div>
            <button className="closePay" onClick={handleCloseModalPayment}>
              X
            </button>
          </div>

          <div className="container-card">
            <form className="card-form" onSubmit={handleSubmit}>
              {id ? "Update Card" : "Card"}
              <input
                className="card-input"
                type="text"
                name="cardNumber"
                placeholder="cardNumber"
                maxLength="16"
                onChange={handleChange}
                defaultValue={information?.card_number}
              />
              <input
                className="card-input"
                type="text"
                name="fullName"
                placeholder="fullName"
                onChange={handleChange}
                defaultValue={information?.name}
              />
              <input
                className="card-input"
                type="text"
                name="month"
                placeholder="month"
                maxLength="2"
                onChange={handleChange}
                defaultValue={information?.month}
              />
              <input
                className="card-input"
                type="text"
                name="year"
                placeholder="year"
                maxLength="4"
                onChange={handleChange}
                defaultValue={information?.year}
              />
              <button className="card-button" type="submit">
                {id ? "Update Card" : "Confirm"}
              </button>
            </form>

            <div className="cardCredit">
              <div className="elements-card">
                <h1 className="h-card">{info.fullName ?? information?.name ?? ""}</h1>
                <p className="card-all">{info.cardNumber ?? information?.card_number ?? ""}</p>
                <span className="span-card">
                  {info.year ?? information?.year ?? ''}/{info.month ?? information?.month ?? ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="snackbar">{errMsg}</div>
    </div>
  );
};
export default ModalPayment;
