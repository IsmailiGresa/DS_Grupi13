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
        <div className="modal5">
            <div className="modal-header5">
                <h2>Redeem your gift card</h2>
                <button className="close-button5" onClick={() => {
                    navigate("/GiftCards");
                }}>X</button>
            </div>
            <div className="modal-body5">
                <label className="LA55"><h4 className="LA55"> Enter gift card number</h4></label>
                <input id="text5" type="text" placeholder="Gift card number"/>
                <button className="redeem-button5">Redeem</button>

            </div>
            <div className="modal-footer5">
                <div className="scrollbar5">
                    <div className="Payment5"><h3 className="Payment5">&#9888;Payment method required</h3></div>
                    <h4 className="HE55"> You must add a payment method to redeem gift cards.</h4>
                </div>
            </div>
        </div>
    );
};

export default RedeemGiftCard;


