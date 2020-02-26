import React from "react";
import '../assets/css/style.css';
import { Link } from "react-router-dom";

function Footer() {
    
    return (
        <div className="footer-margin">
                <Link to="/" className={window.location.pathname === "/"}>
        <footer className="card-footer bg-#666666 footer-font-style text-#ffffff footer-position">2020 - Chameleon Inc. ©
            </footer>
            </Link>
    </div>   
    )
}

export default Footer;