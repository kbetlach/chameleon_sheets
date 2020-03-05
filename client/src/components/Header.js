import React from "react";
import '../assets/css/style.css';
import { Link } from "react-router-dom";

function Header() {
  return (

    <nav className="navbar" style={{padding: 10, backgroundColor: "darkslategray", color: "white"}}>
    <h2>Welcome...(name goes here)</h2>
    <ul className="nav float-right">
        <li class="nav-item">
          <Link to="/" className={window.location.pathname === "/"}>
            <button className="nav-link" id="logout">Logout</button>
            </Link>
        </li>
    </ul>
</nav>

  );
}

export default Header;
