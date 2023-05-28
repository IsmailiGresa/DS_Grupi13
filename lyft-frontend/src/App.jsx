// import "./App.css";
import "./index.css";
import { React } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Mainride from "./Pages/Mainride";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Donate from "./Pages/Donate";
import Giftcards from "./Pages/Giftcards";
import Signup from "./Pages/Signup.jsx";
import Invite from "./Pages/inviteFriends.jsx";
import Payment from "./Pages/Payment.jsx";
import Promos from "./Pages/Promos.jsx";
import Rides from "./Pages/Rides.jsx";
import RedeemGiftCard from "./Pages/RedeemGiftCard.jsx";
import RedeemGift from "./Pages/RedeemGift.jsx";

function App() {
  const isLoggedIn = localStorage.getItem("token") ?? "";
  console.log(isLoggedIn);
  return (
    <div className="App">
      <Routes>
        {isLoggedIn && (
          <Route path={"/mainride"} element={<Mainride />}></Route>
        )}
        {isLoggedIn && <Route path={"/profile"} element={<Profile />}></Route>}
        {isLoggedIn && <Route path={"/donate"} element={<Donate />}></Route>}
        {isLoggedIn && (
          <Route path={"/giftcards"} element={<Giftcards />}></Route>
        )}
        {isLoggedIn && (
          <Route path={"/RedeemGiftCard"} element={<RedeemGiftCard />}></Route>
        )}
        {isLoggedIn && (
          <Route path={"/RedeemGift"} element={<RedeemGift />}></Route>
        )}
        {isLoggedIn && <Route path={"/invite"} element={<Invite />}></Route>}
        {isLoggedIn && <Route path={"/payment"} element={<Payment />}></Route>}
        {isLoggedIn && <Route path={"/promos"} element={<Promos />}></Route>}
        {isLoggedIn && <Route path={"/rides"} element={<Rides />}></Route>}
        <Route path={"/signup"} element={<Signup />}></Route>
        <Route path={"/login"} element={<Login />}></Route>

        {!isLoggedIn && (
          <Route path="*" element={<Navigate replace to="/login" />} />
        )}
        {isLoggedIn && (
          <Route path="*" element={<Navigate replace to="/mainride" />} />
        )}
      </Routes>
    </div>
  );
}
export default App;
