import "./styles.css";
import {useEffect, useRef, useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "../api/axios";

export default function Invite () {
    const navigate = useNavigate();
    const lastScrollTop = useRef(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [users, setUser] = useState([]);
    
    useEffect(() => {
        axios.get('/api/users', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(response => {
            setUser(response.data.user);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);


    const handleScroll = () => {
        const {pageOffset} = window;
        if(
            pageOffset > lastScrollTop.current
        ){
            setIsNavbarVisible(false)
        }else if(
            pageOffset < lastScrollTop.current
        ){
            setIsNavbarVisible(true);
        }
        lastScrollTop.current = pageOffset;
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {passive:true});
        return window.removeEventListener("scroll", handleScroll)
        }, []);
    return(
        <>
            <nav className={`${ isNavbarVisible ? "visible" : ""}`}>
                <div className = "nav-items">
                    <a>Ulyft</a>
                </div>
                <div className = "nav-items1">
                    <button onClick={() => {
                    navigate("/mainride");
                }}>
                    <a>{users.first_name}</a>
                    <img src="/icons/profile.png" alt=""/>
                    </button>
                </div>
            </nav>
            <aside className="sidebar">
                <div className="prf">
                    <img src="/icons/profile.png" alt=""/>
                    <a>{users.first_name} {users.last_name}</a>
                </div>
                <div className="buttons">
                <button onClick={() => {
                    navigate("/mainride");
                }}>
                    <img src="/icons/ride.png" alt=""/>
                    <a>Get a ride</a>
                </button>
                <button onClick={() => {
                    navigate("/rides");
                }}>
                    <img src="/icons/clock.png" alt=""/>
                    <a>Rides</a>
                </button>
                <button onClick={() => {
                    navigate("/payment");
                }}>
                    <img src="/icons/payment.png" alt=""/>
                    <a>Payment</a>
                </button>
                <button onClick={() => {
                    navigate("/giftcards");
                }}>
                    <img src="/icons/gift_card.png" alt=""/>
                    <a>Gift cards</a>
                </button>
                <button onClick={() => {
                    navigate("/promos");
                }}>
                    <img src="/icons/promos.png" alt=""/>
                    <a>Promos</a>
                </button>
                <button onClick={() => {
                    navigate("/invite");
                }}>
                    <img src="/icons/invite.png" alt=""/>
                    <a>Invite friends</a>
                </button>
                <button onClick={() => {
                    navigate("/donate");
                }}>
                    <img src="/icons/donation.png" alt=""/>
                    <a>Donate</a>
                </button>
                <button onClick={() => {
                    navigate("/profile");
                }}>
                    <img src="/icons/settings.png" alt=""/>
                    <a>Settings</a>
                </button>
                <button onClick={() => {
                    navigate("/logout");
                }}>
                    <img src="/icons/profile.png" alt=""/>
                    <a>Log out</a>
                </button>
                </div>
            </aside>
            <div className="body">
                Main
            </div>
        </>
    );
};