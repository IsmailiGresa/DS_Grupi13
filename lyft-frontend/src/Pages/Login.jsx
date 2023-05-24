import { useRef, useState, useEffect, useContext } from 'react';
//import AuthContext from "./context/AuthProvider";
import axios from '../api/axios';
const LOGIN_URL = 'localhost:8000/api/auth';
import "./signuplogin.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    //const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', {
                email: username,
                password: pwd
            });

            localStorage.setItem('token', response.data.data.token);
            
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ username, pwd, roles, accessToken });
            setUsername('');
            setPwd('');
            setSuccess(true);
            navigate("/mainride");
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            // errRef.current.focus();
        }
    }

    return (
        <div className="main-container my-selector body-log">
            {success ? (
                <section className="section-info">
                    <h1 className="hone-h1">You are logged in!</h1>
                    <br />
                    <p className="html-tags">
                        <a className="sign-link" href="#">Go to Home</a>
                    </p>
                </section>
            ) : (

                <section className="section-info ">
                    {/* <p ref={errRef} className={errMsg ? "error-message" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                    <h1 className="hone-h1">Log In</h1>
                    <form className="form-ls" onSubmit={handleSubmit}>
                        <label className="inp-label" htmlFor="username">Username:</label>
                        <input
                            className="textarea-text"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />

                        <label className="inp-label" htmlFor="password">Password:</label>
                        <input
                            className="textarea-text"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className="validbtn"onClick={() => {
                        navigate("/mainride");
                        }}>
                        <a>Login</a>
                        </button>
                    </form>
                    <p className="html-tags">
                        Need an Account?<br />
                        <span className="inline-element">
                            {/*put router link here*/}
                            <button className="sign-link" onClick={() => {
                            navigate("/signup");
                            }}>
                            <a>Sign Up</a>
                            </button>
                        </span>
                    </p>
                </section>


            )}
        </div>
    )
}
export default Login;