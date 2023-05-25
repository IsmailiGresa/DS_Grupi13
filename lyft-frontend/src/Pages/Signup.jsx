import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import axios from './api/axios';
import "./signuplogin.css";
import { useNavigate } from 'react-router-dom';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Signup = () => {
    const firstNameRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);

    const [email, setEmail] = useState('');

    const [user] = useState('');
    const [validName] = useState(false);
    const [userFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
          firstNameRef.current.focus();
    }, [])


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
        setValidFirstName(firstName.trim().length > 0);
        setValidLastName(lastName.trim().length > 0);
    }, [pwd, matchPwd, firstName, lastName]);

    useEffect(() => {
        setErrMsg('');
    }, [firstName, lastName, email, pwd, matchPwd])

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate inputs
        const isEmailValid = isValidEmail(email);
        if (!validFirstName || !validLastName || !isEmailValid || !validPwd || !validMatch) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ firstName, lastName, email, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            setFirstName('');
            setLastName('');
            setEmail('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <div  className="main-container my-selector body-log ">
            {success ? (
                <section className="section-info">
                    <h1 className="hone-h1">Success!</h1>
                    <p className="html-tags">
                        <a   className="sign-link" href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section className="section-info ">
                    <p ref={errRef} className={errMsg ? "error-message" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className="hone-h1">Signup</h1>
                    <form className="form-ls" onSubmit={handleSubmit}>
                        <label className="inp-label" htmlFor="first_name">
                            First Name:
                            <FontAwesomeIcon icon={faCheck} className={validFirstName ? "valid-input" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validFirstName || !firstName ? "hide" : "invalid-input"} />
                        </label>
                        <input
                            type="text"
                            className={`textarea-text ${validFirstName ? "" : " "}`}
                            id="first_name"
                            ref={firstNameRef}
                            autoComplete="off"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            required
                            aria-invalid={validFirstName ? "false" : "true"}
                        />
                        <label className="inp-label" htmlFor="last_name">
                            Last Name:
                            <FontAwesomeIcon icon={faCheck} className={validLastName ? "valid-input" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validLastName || !lastName ? "hide" : "invalid-input"} />
                        </label>
                        <input
                            type="text"
                            className={`textarea-text ${validLastName ? "" : ""}`}
                            id="last_name"
                            autoComplete="off"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            required
                            aria-invalid={validLastName ? "false" : "true"}
                        />

                        <label className="inp-label" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            className={`textarea-text ${isValidEmail(email) ? "" : "invalid-input"}`}
                            id="email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="email@gmail.com"
                            required
                            aria-invalid={isValidEmail(email) ? "false" : "true"}
                        />

                        <p id="uidnote" className={userFocus && user && !validName ? "input-instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>


                        <label className="inp-label" htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid-input" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid-input"} />
                        </label>
                        <input
                            className="textarea-text"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "input-instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label className="inp-label" htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid-input" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid-input"} />
                        </label>
                        <input
                            className="textarea-text"
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "input-instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <button className="validbtn" disabled={!validName || !validPwd || !validMatch ? true : false}onClick={() => {
                            navigate("/mainride");
                            }}><a>Sign Up</a></button>
                            
                    </form>
                    <p className="html-tags">
                        Already registered?<br />
                        <span className="inline-element">
                            {/*put router link here*/}
                            <button className="sign-link" onClick={() => {
                            navigate("/login");
                            }}>
                            <a>Sign In</a>
                            </button>
                        </span>
                    </p>
                </section>
            )}
        </div>
    )
}

export default Signup;