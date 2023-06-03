import React, { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  user: "",
  isLoggedIn: false,
  login: (token, user) => {},
  logout: () => {},
  mobileNumber: "",
  setMobileNumber: "",
});

export const AuthContextProvider = (props) => {
  const oldToken = localStorage.getItem("token");
  const [token, setToken] = useState(oldToken);
  const [user, setUser] = useState(localStorage.getItem("user") ?? "");
  const [mobileNumber, setMobileNumber] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [selectedVenueId, setSelectedVenueId] = useState(
    localStorage.getItem("selectedVenueId") ?? ""
  );
  const userIsLoggedin = !!token;

  const loginHandler = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
    localStorage.setItem("selectedVenueId", 2);
  };
  const logoutHandler = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedin,
    user: user,
    login: loginHandler,
    logout: logoutHandler,
    setMobileNumber: setMobileNumber,
    mobileNumber: mobileNumber,
    resetCode: resetCode,
    setResetCode: setResetCode,
    selectedVenueId: selectedVenueId,
    setSelectedVenueId: setSelectedVenueId,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
