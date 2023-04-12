import "./styles.css";
import {useEffect, useRef, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Profile () {

  const [display, setDisplay] = useState('none');

  const handleOn = () => {
    setDisplay('block');
  };

  const handleOff = () => {
    setDisplay('none');
  };
    const [mode, setMode] = useState('light');
    const handleModeChange = (event) => {
        setMode(event.target.value);
        document.body.setAttribute('data-mode', event.target.value);
    }
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
                    <div className="ubadge1">
                        <span>Marathoner</span>
                    </div>
                    </div>
                    <div className="badge2">
                    <button>
                        <img src="/icons/lock.png"></img>
                    </button>
                    <div className="ubadge2">
                        <span>Five-Star Rider</span>
                    </div>
                    </div>
                    <div className="badge3">
                    <button>
                        <img src="/icons/lock.png"></img>
                    </button>
                    <div className="ubadge3">
                        <span>Top Tipper</span>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="acc">
                <div className="pen">
                <h3>Account settings</h3>
                <button>
                    <img src="/icons/pen.png"></img>
                </button>
                </div>
                </div>
                <div className="info"></div>
                    <div className="ident">
                        <div className="ident1">
                            <img src="/icons/profile.png"></img>
                            <div className="idn">
                                <div className="ident11">
                                    <span> Gresa Ismaili</span>
                                </div>
                                <div className="ident12">
                                    <div>Pronouns not selected</div>
                                </div>
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
                            <div className="home1">
                            <img src="/icons/home.png"></img>
                            <span>Add home</span>
                            <button>
                                <img src="/icons/three-dots.png"></img>
                            </button>
                            </div>
                        </div>
                        <div className="work">
                            <img src="/icons/briefcase.png"></img>
                            <span>Add work</span>
                            <button>
                                <img src="/icons/three-dots.png"></img>
                            </button>
                        </div>
                    </div>
                    <div className="mode">
                        <h2>Dark Mode</h2>
                        <form>
                            <input type="radio"name="mode" value="light" checked={mode === 'light'} onChange={handleModeChange} />
                            <label for="mode">Light</label><br></br>
                            <input type="radio" name="mode" value="dark" checked={mode === 'dark'} onChange={handleModeChange} />
                            <label for="mode">Dark</label><br></br>
                    </form>
                    </div>
                    <div>
      <div className="overlay" onClick={handleOff}/>
      <div>
        <h2>Overlay</h2>
        <p>
          Add an overlay effect to the page content (100% width and height with
          a black background color with 50% opacity).
        </p>
        <button onClick={handleOn}>Turn on overlay effect</button>
      </div>
    </div>
                </div>
            </div>
        </>
    );
};