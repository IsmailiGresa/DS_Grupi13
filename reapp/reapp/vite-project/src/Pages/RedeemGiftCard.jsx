import React, {useState} from 'react';
import './RedeemGiftCard.css';
import GiftCards from './Giftcards' ;
import { useNavigate } from 'react-router-dom';
import { useRef as myUseRef } from 'react';

const RedeemGiftCard = () => {
    const [showRedeemWindow, setShowRedeemWindow] = useState(false);
    const navigate = useNavigate();
    const lastScrollTop =myUseRef(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    return (
        <div className="modal">
            <div className="modal-header">
                <h2>Redeem your gift card</h2>
                <button className="close-button" onClick={() => {
                    navigate("/GiftCards");
                }}>X</button>
            </div>
            <div className="modal-body">
                <label>Enter gift card number</label>
                <input type="text" placeholder="Gift card number"/>
                <button className="redeem-button">Redeem</button>

            </div>
            <div className="modal-footer">
                <div className="scrollbar">
                    <div className="Payment"><h3>&#9888;Payment method required</h3></div>
                    <h4> You must add a payment method to redeem gift cards.</h4>
                </div>
            </div>
        </div>
    );
};

export default RedeemGiftCard;
