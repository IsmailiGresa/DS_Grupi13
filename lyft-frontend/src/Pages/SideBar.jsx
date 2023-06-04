import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = ({ users }) => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="prf">
        <img src="/icons/profile.png" alt="" />
        <a>
          {users.first_name} {users.last_name}
        </a>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            navigate("/mainride");
          }}
        >
          <img src="/icons/ride.png" alt="" />
          <a>Get a ride</a>
        </button>
        <button
          onClick={() => {
            navigate("/rides");
          }}
        >
          <img src="/icons/clock.png" alt="" />
          <a>Rides</a>
        </button>
        <button
          onClick={() => {
            navigate("/payment");
          }}
        >
          <img src="/icons/payment.png" alt="" />
          <a>Payment</a>
        </button>
        <button
          onClick={() => {
            navigate("/giftcards");
          }}
        >
          <img src="/icons/gift_card.png" alt="" />
          <a>Gift cards</a>
        </button>
        {(JSON.parse(localStorage.getItem("role"))?.name ?? null) ==
          "admin" && (
          <button
            onClick={() => {
              navigate("/promos");
            }}
          >
            <img src="/icons/promos.png" alt="" />
            <a>Promos</a>
          </button>
        )}
        <button
          onClick={() => {
            navigate("/invite");
          }}
        >
          <img src="/icons/invite.png" alt="" />
          <a>Invite friends</a>
        </button>
        <button
          onClick={() => {
            navigate("/donate");
          }}
        >
          <img src="/icons/donation.png" alt="" />
          <a>Donate</a>
        </button>
        <button
          onClick={() => {
            navigate("/profile");
          }}
        >
          <img src="/icons/settings.png" alt="" />
          <a>Settings</a>
        </button>
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          <img src="/icons/profile.png" alt="" />
          <a>Log out</a>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
