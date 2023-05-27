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
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ payment_data: info }),
            });

            if (response.ok) {
                // Payment submitted successfully
                console.log('Payment submitted successfully');
            } else {
                // Handle error
                console.log('Payment submission failed');
            }
        } catch (error) {
            
            console.log('Error submitting payment:', error.message);
        }
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
           <form className="card-form" onSubmit={handleSubmit}>
            Card
            <input
                className="card-input"
                type="text"
                name="cardNumber"
                placeholder="cardNumber"
                maxLength="16"
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
                maxLength="2"
                onChange={handleChange} />
            <input
                className="card-input"
                type="text"
                name="year"
                placeholder="year"
                maxLength="4"
                onChange={handleChange} />
            <button className="card-button" type="submit">Confirm</button>
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