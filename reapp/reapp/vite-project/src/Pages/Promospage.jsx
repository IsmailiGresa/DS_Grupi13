import React, { useState } from "react";
import './PromosPage.css';

function Promospage() {
    const [value, setValue] = useState("");
    const [discount, setDiscount] = useState("");
    const [validity, setValidity] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        setDiscount("10");
        setValidity("April 30, 2023");
    }

    return (
        <div className="promos-container">
            <p className="promos-heading">Big savings on promos!</p>
            <form onSubmit={handleSubmit} className="promos-form">
                <label className="promos-label">
                    Enter promo code:
                    <div className="code-input-container">
                        <input type="number" value={value} onChange={handleChange} className="promos-input" placeholder="XXXXX" min="0" max="99999" />
                    </div>
                </label>
                <button type="submit" className="promos-button">Submit</button>
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
                <p className="promos-subheading">Add a promo code to see active promos here</p>
            )}
        </div>
    );
}

export default Promospage;
