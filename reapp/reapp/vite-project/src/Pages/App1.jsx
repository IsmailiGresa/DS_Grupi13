import React, { useState } from "react";
import './applog.css';
import { Login } from "./Login";
import { Signup } from "./Signup";

function App1() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="App">
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
            }
        </div>
    );
}

export default App1;