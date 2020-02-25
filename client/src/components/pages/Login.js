import React from 'react';
import '../../assets/css/style.css';
import Footer from "../Footer"
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
                    <Link to="/adduser" className={window.location.pathname === "/adduser"}>
                        <button style={{marginLeft: "360px", marginTop: "20px", backgroundColor:"white" , color: "darkslategray", borderRadius: "6px", border: ".5px solid white"}}>
                        Add User
                        </button>
                    </Link>  
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;
