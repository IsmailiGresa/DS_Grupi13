import React, { useState } from 'react';
import "./ModalPayment.css";
import {useNavigate} from "react-router-dom";

const ModalPayment = ({ setOpenModalPayment }) => {
    const navigate =useNavigate();
    const [info, setInfo] = useState({
        cardNumber: '',
        fullName: '',
        month: '',
        year: ''
    });
    const handleChange = (e) => {
        setInfo({
            ...info, [e.target.name]: e.target.value
        });
    };

    const handleCloseModalPayment = () => {
        setOpenModalPayment(false);
    };

    return (
        <div className="paymentModal">
            <div className="paymentModal-content">
                <div>
                    <button className="closePay" onClick={handleCloseModalPayment}>
                        X
                    </button>
                </div>

        <div className="container-card">
           <form className="card-form">
            Card
            <input
                className="card-input"
                type="text"
                name="cardNumber"
                placeholder="cardNumber"
                maxlength="16"
                onChange={handleChange} />
            <input
                className="card-input"
                type="text"
                name="fullName"
                placeholder="fullName"
                onChange={handleChange} />
            <input
                className="card-input"
                type="text"
                name="month"
                placeholder="month"
                maxlength="2"
                onChange={handleChange} />
            <input
                className="card-input"
                type="text"
                name="year"
                placeholder="year"
                maxlength="4"
                onChange={handleChange} />
            <button className="card-button">Confirm</button>
        </form>

        <div className="cardCredit">
            <div className="elements-card">
                <h1 className="h-card">{info.fullName}</h1>
                <p className="card-all">{info.cardNumber}</p>
                <span className="span-card">{info.year}/{info.month}</span>
            </div>
        </div>

        </div>
        </div>
        </div>

    );
};
export default ModalPayment;