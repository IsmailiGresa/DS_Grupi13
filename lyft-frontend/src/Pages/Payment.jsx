import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalPayment from "./ModalPayment.jsx";
import "./Payment.css";
import axios from "../api/axios";
import SideBar from "./SideBar";

export default function Payment() {
  const navigate = useNavigate();
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [OpenModalPayment, setOpenModalPayment] = useState(false);
  const [users, setUser] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);

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
    getPaymentMethods();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPaymentMethods = async () => {
    const response = await axios.get("/api/payment-methods");
    setPaymentMethods(response.data);
  };

  const [info, setInfo] = useState({});
  const [sendId, setSendId] = useState(null);

  const handleUpdateFields = (id) => {
    setOpenModalPayment(true);
    getPaymentDetails(id);
  };

  const getPaymentDetails = async (id) => {
    let resp = await axios.get(`/api/payment-methods/${id}`);
    console.log(resp.data);
    setInfo(resp.data);
    setSendId(id);
  };

  const handleDeletePaymentMethod = async (id) => {
    let response = await axios.delete(`/api/payment-methods/${id}`);
    if (response.status == 204) {
      getPaymentMethods();
    }
  };

  return (
    <>
      {OpenModalPayment && (
        <ModalPayment
          setOpenModalPayment={setOpenModalPayment}
          getPaymentMethods={getPaymentMethods}
          information={info}
          id={sendId}
        ></ModalPayment>
      )}
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

      <div className="main">
        {paymentMethods.length > 0 ? (
          <div
            style={{
              border: "1px solid black",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "4px 100px",
            }}
          >
            <div>
              <h1>Card Number: {paymentMethods[0].card_number}</h1>
              <p>Card Name: {paymentMethods[0].name}</p>
              <p>
                Card Expiry : {paymentMethods[0].month} /{" "}
                {paymentMethods[0].year}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src="/icons/pen.png"
                style={{
                  marginBottom: 4,
                }}
                onClick={() => handleUpdateFields(paymentMethods[0].id)}
              ></img>
              <img
                src="/icons/delete.png"
                onClick={() => handleDeletePaymentMethod(paymentMethods[0].id)}
              ></img>
            </div>
          </div>
        ) : (
          <button
            className="cardPay-button"
            onClick={() => {
              setOpenModalPayment(true);
              setInfo({});
              setSendId(null);
            }}
          >
            Add Payment Method
          </button>
        )}
      </div>
    </>
  );
}
