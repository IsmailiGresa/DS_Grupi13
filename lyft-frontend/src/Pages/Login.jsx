import { useRef, useState, useEffect, useContext } from "react";
// import AuthContext from "./context/AuthProvider";
import axios from "../api/axios";
const LOGIN_URL = "localhost:8000/api/auth";
import "./signuplogin.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";

const Login = () => {
  let authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
    try {
      setErrMsg("");
      const response = await axios.post("/api/login", {
        email: email,
        password: pwd,
      });
      console.log(response.status);
      console.log(response.status == 200);
      if (response.status === 200) {
        authCtx.login(
          response.data.data.token,
          JSON.stringify(response.data.data.user)
        );
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        //   setAuth({ email, pwd, roles, accessToken });
        setEmail("");
        setPwd("");
        navigate("/mainride");
        setSuccess(true);
      } else {
        // console.log(response.data)
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <div className="main-container my-selector body-log">
      {success ? (
        <section className="section-info">
          <h1 className="hone-h1">You are logged in!</h1>
          <br />
          <p className="html-tags">
            <a className="sign-link" href="#">
              Go to Home
            </a>
          </p>
        </section>
      ) : (
        <section className="section-info ">
          <h1 className="hone-h1">Log In</h1>
          <form className="form-ls" onSubmit={handleSubmit}>
            <label className="inp-label" htmlFor="username">
              Email:
            </label>
            <input
              className="textarea-text"
              type="email"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label className="inp-label" htmlFor="password">
              Password:
            </label>
            <input
              className="textarea-text"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className="validbtn" onClick={handleSubmit}>
              <a>Login</a>
            </button>
          </form>
          <p className="html-tags">
            Need an Account?
            <br />
            <span className="inline-element">
              {/*put router link here*/}
              <button
                className="sign-link"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                <a>Sign Up</a>
              </button>
            </span>
          </p>
        </section>
      )}
      <div id="snackbar">{errMsg}</div>
    </div>
  );
};
export default Login;
