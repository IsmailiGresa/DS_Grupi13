import "./styles.css";
// import "./rides.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

export default function Rides() {

    const [data, setData] = useState([]);
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/rides');
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const navigate = useNavigate();
    const lastScrollTop = useRef(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const handleScroll = () => {
        const { pageOffset } = window;
        if (
            pageOffset > lastScrollTop.current
        ) {
            setIsNavbarVisible(false)
        } else if (
            pageOffset < lastScrollTop.current
        ) {
            setIsNavbarVisible(true);
        }
        lastScrollTop.current = pageOffset;
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return window.removeEventListener("scroll", handleScroll)
    }, []);


    return (
        <>
            <nav className={`${isNavbarVisible ? "visible" : ""}`}>
                <div className="nav-items">
                    <a>Ulyft</a>
                </div>
                <div className="nav-items1">
                    <button onClick={() => {
                        navigate("/mainride");
                    }}>
                        <a>{users.first_name}</a>
                        <img src="/icons/profile.png" alt="" />
                    </button>
                </div>
            </nav>
            <aside className="sidebar">
                <div className="prf">
                    <img src="/icons/profile.png" alt="" />
                    <a>{users.first_name} {users.last_name}</a>
                </div>
                <div className="buttons">
                    <button onClick={() => {
                        navigate("/mainride");
                    }}>
                        <img src="/icons/ride.png" alt="" />
                        <a>Get a ride</a>
                    </button>
                    <button onClick={() => {
                        navigate("/rides");
                    }}>
                        <img src="/icons/clock.png" alt="" />
                        <a>Rides</a>
                    </button>
                    <button onClick={() => {
                        navigate("/payment");
                    }}>
                        <img src="/icons/payment.png" alt="" />
                        <a>Payment</a>
                    </button>
                    <button onClick={() => {
                        navigate("/giftcards");
                    }}>
                        <img src="/icons/gift_card.png" alt="" />
                        <a>Gift cards</a>
                    </button>
                    <button onClick={() => {
                        navigate("/promos");
                    }}>
                        <img src="/icons/promos.png" alt="" />
                        <a>Promos</a>
                    </button>
                    <button onClick={() => {
                        navigate("/invite");
                    }}>
                        <img src="/icons/invite.png" alt="" />
                        <a>Invite friends</a>
                    </button>
                    <button onClick={() => {
                        navigate("/donate");
                    }}>
                        <img src="/icons/donation.png" alt="" />
                        <a>Donate</a>
                    </button>
                    <button onClick={() => {
                        navigate("/profile");
                    }}>
                        <img src="/icons/settings.png" alt="" />
                        <a>Settings</a>
                    </button>
                    <button onClick={() => {
                        navigate("/logout");
                    }}>
                        <img src="/icons/profile.png" alt="" />
                        <a>Log out</a>
                    </button>
                </div>
            </aside>
            <div className="rides_slogan">
                <h2 className="h2rides">Rides</h2>
                <span className="ride-history"><strong>Ride History</strong></span>


            </div>
            <div className="containerlejla">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        All
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "rides-content  active-rides-content" : "rides-content"}
                    >

                        {data.length > 0 ? (
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Ride Length (km)</th>
                                            <th>Amount</th>
                                            <th>Pickup Location</th>
                                            <th>Dropoff Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr key={index}>
                                                <td className="ride-length">{row.ride_length_km}</td>
                                                <td className="amount">{row.amount}</td>
                                                <td className="pickup-location">{row.pickup_location}</td>
                                                <td className="dropoff-location">{row.dropoff_location}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <> <h2>No rides yet</h2>
                                <p>
                                    You haven't completed any rides yet. Take your first ride today!
                                </p>

                            </>

                        )}
                    </div>
                </div>


            </div>
        </>
    );
};
