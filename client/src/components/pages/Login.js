import React from "react";
import './pages.css';
import LoginButton from '../Buttons/LoginButton/LoginButton';

function Login() {

    return (
        <div>
            <div className="container w3-container w3-center w3-animate-opacity">
                <div className="jumbotron">
                    <div id="chameleon">
                        CHAMELEON SHEETS
                    </div>
                    <LoginButton />
                </div>
            </div>
        </div>
    )
}

export default Login;
