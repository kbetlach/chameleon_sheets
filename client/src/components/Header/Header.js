import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (

    <nav className="navbar main-header" style={{padding: 10, backgroundColor: "darkslategray", color: "white"}}>
    <h2>Welcome...(name goes here)</h2>
    <ul className="nav float-right">
        <li className="nav-item">
          <Link to="/" className={window.location.pathname === "/"}>
            <button className="nav-link" id="logout">Logout</button>
            </Link>
        </li>
    </ul>
</nav>

  );
}

export default Header;
