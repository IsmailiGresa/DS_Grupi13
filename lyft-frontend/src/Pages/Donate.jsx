import "./styles.css";
import "./donate.css";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import SideBar from "./SideBar";

export default function Donate() {
  const [selectedCharity, setSelectedCharity] = useState(null);
  const [charities, setCharities] = useState([]);
  const [isDonate, setDonate] = useState(false);

  const [users, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("/api/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const startDonating = async (charityId) => {
    if (!isDonate) {
      try {
        const response = await axios.post("/api/donations", {
          charity_id: charityId,
        });

        console.log(response);
      } catch (error) {
        console.log(error);
      }
      setSelectedCharity(charityId);
      setDonate(true);
    }
  };

  // when stop donating, reset the charity selection
  const stopDonating = async () => {
    setSelectedCharity(null);
    setDonate(false);

    try {
      const response = await axios.delete("/api/donations", {
        charity_id: selectedCharity,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const handleScroll = () => {
    const { pageOffset } = window;
    if (pageOffset > lastScrollTop.current) {
      setIsNavbarVisible(false);
    } else if (pageOffset < lastScrollTop.current) {
      setIsNavbarVisible(true);
    }
    lastScrollTop.current = pageOffset;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/is_donating");
        const charities = await axios.get("/api/charities");
        setCharities(charities.data.data);

        setDonate(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className={`${isNavbarVisible ? "visible" : ""}`}>
        <div className="nav-items">
          <a>Ulyft</a>
        </div>
        <div className="nav-items1">
          <button
            onClick={() => {
              navigate("/mainride");
            }}
          >
            <a>{users.first_name}</a>
            <img src="/icons/profile.png" alt="" />
          </button>
        </div>
      </nav>
      <SideBar users={users} />

      <div className="donate_slogan">
        <h2 className="h2donate">Donate</h2>
        <span>
          <strong>
            Millions lack access to transportation and basic needs.
          </strong>
        </span>
        <p>
          Your small change matters. Round up the cost of your ride to the
          nearest euro and donate the difference.
        </p>
        <hr />
        <h3 className="h3_donate">Choose an organization</h3>
      </div>

      {isDonate && (
        <>
          <div className="selected_donations">
            <p className="pdonate">
              <strong>You're now donating!</strong>
            </p>
            <button className="donatebuttons" onClick={() => stopDonating()}>
              Stop Donating
            </button>
          </div>
        </>
      )}

      <div className="container_donate">
        {charities.map((charity) => (
          <div key={charity.id} className="organizations">
            <div className="avatar">
              <img
                style={{ borderRadius: "50%", width: "100%", height: "100%" }}
                src={charity.image_url}
              />
              <div className="charityName">
                <h4>{charity.name}</h4>
              </div>
              <button
                className="donatebuttons"
                checked={selectedCharity === charity.id}
                onClick={() => startDonating(charity.id)}
              >
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
