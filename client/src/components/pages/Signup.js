import React, { useState } from "react";
import './pages.css';
import API from '../../utils/API';

function Signup() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    API.createPassword({
        email: email,
        password: password
      }) 

    return (
        <div>
            <div className="container w3-container w3-center w3-animate-opacity">
                <div className="jumbotron">
                    <h2>Welcome to Chameleon Sheets. Please confirm your email and choose a password for access.</h2>
                    <div className="form-group">
                        <label for="emailInput">Confirm Email Address</label>
                        <input onChange={e => setEmail(e.target.value)} className="form-control" id="email-signup" placeholder="Email" type="email"></input>
                    </div>
                    <div className="form-group">
                        <label for="passwordInput">Password</label>
                        <input onChange={e => setPassword(e.target.value)} className="form-control" id="password-signup" placeholder="Password" type="password"></input>
                    </div>
                    <input style={{ marginTop: "20px", backgroundColor: "darkslategray", color: "white", borderRadius: "6px", border: ".5px solid white" }} type="submit"></input>
                </div>
            </div>
        </div>
    )
}

export default Signup;
