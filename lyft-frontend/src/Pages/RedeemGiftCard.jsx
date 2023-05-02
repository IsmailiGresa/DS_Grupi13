import React, { useState } from 'react';
import './RedeemGiftCard.css';
import { useNavigate } from 'react-router-dom';

const RedeemGiftCard = ({ setShowRedeemWindow }) => {
    const navigate = useNavigate();

    const handleCloseModal = () => {
        setShowRedeemWindow(false);
    };

    return (
        <div className="modal">
            <div className="modal-content5">
                <div className="modal-header5">
                    <h2>Redeem your gift card</h2>
                    <button className="close-button5" onClick={handleCloseModal}>
                        X
                    </button>
                </div>
                <div className="modal-body5">
                    <label className="LA55">
                        <h4 className="LA55"> Enter gift card number</h4>
                    </label>
                    <input id="text5" type="text" placeholder="Gift card number" />
                    <button className="redeem-button">Redeem</button>
                </div>
                {/*<div className="modal-footer">*/}
                {/*    <div className="scrollbar">*/}
                {/*        <div className="Payment">*/}
                {/*            <h3 className="Payment">&#9888;Payment method required</h3>*/}
                {/*        </div>*/}
                {/*        <h4 className="HE55">*/}
                {/*            You must add a payment method to redeem gift cards.*/}
                {/*        </h4>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default RedeemGiftCard;
