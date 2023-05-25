import "./styles.css";
import "./profile.css"
import Modal from "./Modal.jsx";
import Modal1 from "./Modal1.jsx"
import Modal2 from "./Modal2.jsx";
import Modal3 from "./Modal3.jsx";
import ModalPen from "./ModalPen.jsx";
import ModalHome from "./ModalHome.jsx";
import ModalWork from "./ModalWork.jsx";
import {useEffect, useRef, useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "../api/axios";

export default function Profile () {

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

    const createdDate = new Date(users.created_at);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - createdDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);
    const [modalOpen4, setModalOpen4] = useState(false);
    const [modalOpen5, setModalOpen5] = useState(false);
    const [modalOpen6, setModalOpen6] = useState(false);

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
        {modalOpen && <Modal setOpenModal={setModalOpen}></Modal>}
        {modalOpen1 && <Modal1 setOpenModal1={setModalOpen1}></Modal1>}
        {modalOpen2 && <Modal2 setOpenModal2={setModalOpen2}></Modal2>}
        {modalOpen3 && <Modal3 setOpenModal3={setModalOpen3}></Modal3>}
        {modalOpen4 && <ModalPen setOpenModal4={setModalOpen4}></ModalPen>}
        {modalOpen5 && <ModalHome setOpenModal5={setModalOpen5}></ModalHome>}
        {modalOpen6 && <ModalWork setOpenModal6={setModalOpen6}></ModalWork>}
   
        <div className="contain">
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
            <div className="mainProfile">
                <div className="inside"></div>
                    <h5>Profile</h5>
                    <div className="content">
                        <div className="profile">
                            <img src="/icons/profile.png"></img>
                            <button onClick={() => {setModalOpen(true);}}>
                                <img src="/icons/photo-camera.png"></img>
                            </button>

                        <div>{users.first_name} {users.last_name}</div>
                    </div>
                    <div className="history">
                    <div className="history1">
                        
                    <span>{users.rides}</span>
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
                    <span>{daysDifference}</span>
                    <span>Days</span>
                    </div>
                </div>
                <div className="badge">
                    <h2>Badges</h2>
                    <div className="badgbtn">
                    <div className="badge1">
                        <button onClick={() => {setModalOpen1(true);}}>
                            <img src="/icons/lock.png"></img>
                        </button>
                        <div className="ubadge1">
                            <span>Marathoner</span>
                        </div>
                    </div>
                    <div className="badge2">
                    <button onClick={() => {setModalOpen2(true);}}>
                        <img src="/icons/lock.png"></img>
                    </button>
                    <div className="ubadge2">
                        <span>Five-Star Rider</span>
                    </div>
                    </div>
                    <div className="badge3">
                    <button onClick={() => {setModalOpen3(true);}}>
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
                <button onClick={() => {setModalOpen4(true);}}>
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
                                    <span>{users.first_name} {users.last_name}</span>
                                </div>
                                <div className="ident12">
                                    <div>Pronouns not selected</div>
                                </div>
                            </div>
                        </div>
                        <div className="email">
                            <img src="/icons/email.png"></img>
                            <span>{users.email}</span>
                        </div>
                        <div className="phone">
                            <img src="/icons/phone.png"></img>
                            <span>{users.phone_number}</span>
                        </div>
                    </div>
                </div>
                
                    <div className="shortcut">
                        <div className="home">
                            <h2>Shortcuts</h2>
                            <div className="home1">
                            <img src="/icons/home.png"></img>
                            <span>Add home</span>
                            <button onClick={() => {setModalOpen5(true);}}>
                                <img src="/icons/three-dots.png"></img>
                            </button>
                            
                            </div>
                        </div>
                        <div className="work">
                            <img src="/icons/briefcase.png"></img>
                            <span>Add work</span>
                            <button onClick={() => {setModalOpen6(true);}}>
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
                    </div>
                </div>
            </div>
        </>
    );
};