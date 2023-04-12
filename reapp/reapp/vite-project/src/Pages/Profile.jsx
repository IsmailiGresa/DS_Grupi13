import "./styles.css";
import {useEffect, useRef, useState} from "react";
import { useNavigate } from 'react-router-dom';
export default function Profile () {
    const navigate = useNavigate();
    const lastScrollTop = useRef(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
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
                    <a>Gresa</a>
                    <img src="/icons/profile.png" alt=""/>
                    </button>
                </div>
            </nav>
            <aside className="sidebar">
                <div className="prf">
                    <img src="/icons/profile.png" alt=""/>
                    <a>Gresa Ismaili</a>
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
                <div className="inside"></div>
                <h1>Profile</h1>
                <div className="content">
                <div className="profile">
                        <img src="/icons/profile.png"></img>
                        <button>
                        <img src="/icons/photo-camera.png"></img>
                        </button>
                        <div>Gresa Ismaili</div>
                    </div>
                    <div className="history">
                    <div className="history1">
                    <span> 0</span>
                    <span>Rides</span>
                    </div>
                    <div className="history2">
                        <div className="hist22">
                        <img src="/icons/favorite.png"></img>
                        <span> New</span>
                        </div>
                    <span>Rating</span>
                    </div>
                    <div className="history3">
                    <span> 24</span>
                    <span>Days</span>
                    </div>
                </div>
                <div className="badge">
                    <h2>Badges</h2>
                    <div className="badgbtn">
                    <div className="badge1">
                    <button>
                        <img src="/icons/lock.png"></img>
                    </button>
                        <span>Marathoner</span>
                    </div>
                    <div className="badge2">
                    <button>
                        <img src="/icons/lock.png"></img>
                    </button>
                        <span>Five-Star Rider</span>
                    </div>
                    <div className="badge3">
                    <button>
                        <img src="/icons/lock.png"></img>
                    </button>
                        <span>Top Tipper</span>
                    </div>
                    </div>
                </div>
                <div className="acc">
                <h2>Account settings</h2>
                <button>
                    <img src="/icons/pen.png"></img>
                </button>
                </div>
                <div className="info"></div>
                    <div className="ident">
                        
                        <div className="ident1">
                            <img src="/icons/profile.png"></img>
                            <div className="ident11">
                            <span> Gresa Ismaili</span>
                            <span>Pronouns not selected</span>
                            </div>
                        </div>
                        <div className="email">
                            <img src="/icons/email.png"></img>
                            <span>gi@gmail.com</span>
                        </div>
                        <div className="phone">
                            <img src="/icons/phone.png"></img>
                            <span>+1 (202) 000-0000</span>
                        </div>
                    </div>
                    <div className="shortcut">
                        <div className="home">
                            <h2>Shortcuts</h2>
                            <img src="/icons/home.png"></img>
                            <span>Add home</span>
                            <button><img src="/icons/three-dots.png"></img></button>
                        </div>
                        <div className="work">
                            <img src="/icons/briefcase.png"></img>
                            <span>Add work</span>
                            <button><img src="/icons/three-dots.png"></img></button>
                        </div>
                    </div>
                    <div className="mode">
                        <h2>Dark Mode</h2>
                        <form>
                            <input type="radio"name="mode" value="light" checked></input>
                            <label for="mode">Light</label><br></br>
                            <input type="radio" name="mode" value="dark"></input>
                            <label for="mode">Dark</label><br></br>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
};