import "./styles.css";
import "./donate.css";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function Donate() {

    const [selectedCharity, setSelectedCharity] = useState(null);
    const [isDonate, setDonate] = useState(false);

    const handleCharitySelect = (charityId) => {
        setSelectedCharity(charityId);
        setDonate(true);
        console.log(charityId);
    };

    // when stop donating, reset the charity selection
    const stopDonating = () => {
        setSelectedCharity(null);
        setDonate(false);
    }

    const handleDonationSubmit = (charityId, amount) => {
        // Implement your donation submission logic here
        console.log(`Donating to Charity ${charityId} with amount $${amount}`);
    };

    const charities = [
        { id: 1, name: 'Komuniteti Mbështetës i Kancerit në Kosovë', image: "../public/icons/CSCkosovo.png" },
        { id: 2, name: 'Kryqi i Kuq i Kosovës', image: "../public/icons/kryqi.png" },
        { id: 3, name: 'Shoqata e të Verbërve të Kosovës', image: "../public/icons/blindfederate.png" },
        { id: 4, name: 'YMCA Kosovo', image: "../public/icons/ymca.jpg" },
        { id: 5, name: 'Save the Children Kosovo', image: "../public/icons/savethechildren.jpg" },
        { id: 6, name: 'UNICEF Kosovo', image: "../public/icons/unicef.png" },
        { id: 7, name: 'Fondacioni për të Drejtat e Kafshëve', image: "../public/icons/kafshet.jpg" },
        { id: 8, name: 'Qendra për Promovimin e Drejtave të Grave', image: "../public/icons/women.png" },
        { id: 9, name: 'HANDIKOS', image: "../public/icons/handikos.png" },

    ];
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
                        <a>Gresa</a>
                        <img src="/icons/profile.png" alt="" />
                    </button>
                </div>
            </nav>
            <aside className="sidebar">
                <div className="prf">
                    <img src="/icons/profile.png" alt="" />
                    <a>Gresa Ismaili</a>
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

            <div className="donate_slogan">
                <h2 className="h2donate">Donate</h2>
                <span><strong>Millions lack access to transportation and basic needs.</strong></span>
                <p>Your small change matters. Round up the cost of your ride to the nearest euro and donate the difference.</p>
                <hr />
                <h3>Choose an organization</h3>
            </div>

            {isDonate &&
                <>
                    <div className="selected_donations">
                        <p className="pdonate"><strong>You're now donating!</strong></p>
                        <button className="donatebuttons"
                            onClick={() => stopDonating()}
                        >Stop Donating</button>
                    </div>
                </>
            }

            {/* here goes chairity donation deets section*/}
            {/* when you select a charity, you get the id */}
            {/* make an API call with that charity id and get a response with data */}
            {/* display that data in the donations deets */}
            {/* make a button stop donating, if clicked, hide the deets section */}
            <div className="container">


                {charities.map((charity) => (

                    <div key={charity.id} className="organizations">
                        <div className="avatar"><img style={{ borderRadius: '50%', width: '100%', height: '100%' }} src={charity.image} />
                            <div className="charityName">
                                <h4>{charity.name}</h4>

                            </div>
                            <button className="donatebuttons"
                                checked={selectedCharity === charity.id}
                                onClick={() => handleCharitySelect(charity.id)}
                            >Donate</button>
                        </div>

                    </div>
                ))}

            </div>

        </>
    );
};