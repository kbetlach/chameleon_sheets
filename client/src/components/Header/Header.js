import React, { useState, useEffect } from "react";
import "./header.css";
import API from '../../utils/API';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

function Header() {
  const [name, setName] = useState();
  const [loggedOut, setLoggedOut] = useState();
  async function checkYourself(){
      let userPlaceholder = await API.getSelf();
      if(userPlaceholder){
          setName(userPlaceholder.data.first_name)
      }
  }
  useEffect(() => {
      checkYourself();
    },[])
  if (loggedOut) {
      return <Redirect to={"/"} />
    }
  const handleClick = async e => {
      let logout = await API.logout()
      setLoggedOut(true)
  }

  return (

    <nav className="navbar main-header" style={{padding: 10, backgroundColor: "darkslategray", color: "white"}}>
    {(name) ?(<h2>Welcome {name}!</h2>) : (<h2>Welcome!</h2>)}
    <ul className="nav float-right">
        <li className="nav-item">
          <div>
            <button onClick={handleClick} className="nav-link" id="logout">Logout</button>
          </div>
        </li>
    </ul>
</nav>

  );
}

export default Header;
