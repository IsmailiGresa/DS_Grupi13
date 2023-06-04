import "./styles.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Promospage from "./Promospage.jsx";
import axios from "../api/axios";
import SideBar from "./SideBar";

export default function Promos() {
  const navigate = useNavigate();
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
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

      <div className="body">
        <Promospage />
      </div>
    </>
  );
}
