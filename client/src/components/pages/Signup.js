import React from 'react';
import '../../assets/css/style.css';

function Signup() {
    return (
        <div>
            <div className="container w3-container w3-center w3-animate-opacity">
                <div className="jumbotron">
                    <h2>Welcome to Chameleon Sheets. Please confirm your email and choose a password for access.</h2>
                    <div className="form-group">
                        <label for="emailInput">Confirm Email Address</label>
                        <input className="form-control" id="email-signup" placeholder="Email" type="email"></input>
                    </div>
                    <div className="form-group">
                        <label for="passwordInput">Password</label>
                        <input className="form-control" id="password-signup" placeholder="Password" type="password"></input>
                    </div>
                    <input style={{ marginTop: "20px", backgroundColor: "darkslategray", color: "white", borderRadius: "6px", border: ".5px solid white" }} type="submit"></input>
                </div>
            </div>
        </div>
    )
}

export default Signup;