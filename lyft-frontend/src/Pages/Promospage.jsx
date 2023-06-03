import React, { useState } from "react";
import "./PromosPage.css";
import axios from "../api/axios";

function Promospage() {
  const [value, setValue] = useState("");
  const [discount, setDiscount] = useState("");
  const [validity, setValidity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setValue(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitted(true);
    let d = new Date();
    d.setMonth(d.getMonth() + 1);

    let response = await axios.post("/api/promos", {
      code: event.target[0].value,
      discount: 10,
      validity: d.toLocaleDateString().split("/").reverse().join("-"),
    });
    setDiscount("10");
    let date = new Date();
    date.setMonth(date.getMonth() + 1);
    setValidity(date.toLocaleDateString());
  };

  return (
    <div className="promos-container">
      <p className="promos-heading">Big savings on promos!</p>
      <form onSubmit={handleSubmit} className="promos-form">
        <label className="promos-label">
          Enter promo code:
          <div className="code-input-container">
            <input
              type="number"
              value={value}
              onChange={handleChange}
              className="promos-input"
              placeholder="XXXXX"
              min="0"
              max="99999"
            />
          </div>
        </label>
        <button type="submit" className="promos-button">
          Submit
        </button>
      </form>
      {submitted && (
        <div className="promos-result-container">
          <div className="promos-result-code">{value}</div>
          <div className="promos-result-details">
            <div className="promos-result-discount">{discount}% Discount</div>
            <div className="promos-result-validity">Valid until {validity}</div>
          </div>
        </div>
      )}
      {!submitted && (
        <p className="promos-subheading">
          Add a promo code to see active promos here
        </p>
      )}
    </div>
  );
}

export default Promospage;
