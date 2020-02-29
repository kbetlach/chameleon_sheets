import React from 'react';
import '../../assets/css/style.css';
import { Link } from "react-router-dom";


function Login() {
    return (
        <div>
            <div className = "container w3-container w3-center w3-animate-opacity">
                <div className = "jumbotron">
                    <div id = "chameleon">
                        CHAMELEON SHEETS
                    </div>
                    <br />
                    <Link to="/admin" className={window.location.pathname === "/admin"}>
                        <button style={{marginRight: "50px", marginTop: "20px", backgroundColor:"white" , color: "darkslategray", borderRadius: "6px", border: ".5px solid white", padding: 5}}>
                        Add User
                        </button>
                    </Link>
                    <Link to="/main" className={window.location.pathname === "/main"}>
                        <button style={{marginTop: "20px", backgroundColor:"white" , color: "darkslategray", borderRadius: "6px", border: ".5px solid white", padding: 5}}>
                        Login
                        </button>
                    </Link>    
                </div>
            </div>
        </div>
    )
}

export default Login;
