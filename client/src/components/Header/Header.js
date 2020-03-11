import React, { useState, useEffect } from "react";
import "./header.css";
import API from '../../utils/API';
import { Redirect } from "react-router-dom";
import AddUserButton from "../Buttons/AddUserButton/AddUser"
import GridButton from "../Buttons/GridButton/GridButton"
import HistoryButton from "../Buttons/HistoryButton/HistoryButton"
import ViewAllUsersButton from "../Buttons/ViewAllUsersButton/ViewAllUsersButton"

const styles = {
  logoutStyle: {
    width: "100px",
    height: "50px",
    fontSize: "24px",
    backgroundColor: "white",
    color: "darkslategray",
    borderRadius: "6px",
    border: ".5px solid white",
    padding: 5
  }
};

function Header() {
  const [name, setName] = useState();
  const [loggedOut, setLoggedOut] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [user, setUser] = useState();

  async function checkYourself(){
      let userPlaceholder = await API.getSelf();
      if(userPlaceholder){
          setName(userPlaceholder.data.first_name)
      }
      if(userPlaceholder && (userPlaceholder.data.role === "Admin")){
        setIsAdmin(true)
    }
    else{
        setIsAdmin(false)
    }
    setUser(userPlaceholder.data);
  }

useEffect(() => {
  checkYourself();
},[])

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
    <ul className="nav">
      
    {(user && user.role) ?(<div> {(isAdmin) ? (
        <div className="row">
            <li className="nav-link col-md-2">
                    <AddUserButton />
            </li>
            <li className="nav-link col-md-2">
                    <ViewAllUsersButton />
            </li>
              <li className="nav-link col-md-2">
                    <GridButton />
              </li>
              <li className="nav-link col-md-2">
                    <HistoryButton />
              </li>
              <li className="nav-link col-md-2">
                <button onClick={handleClick} style={styles.logoutStyle} id="logout">Logout</button>
            </li>   
          </div>
            ) : (
          <div className="row">
              <li className="nav-link col-md-4">
                    <GridButton />
              </li>
              <li className="nav-link col-md-4">
                    <HistoryButton />
                </li>
              <li className="nav-link col-md-4">
                <button onClick={handleClick} style={styles.logoutStyle} id="logout">Logout</button>
            </li>   
          </div>
            )} </div>) :(
              <li className="nav-link">
                <button onClick={handleClick} style={styles.logoutStyle} id="logout">Home</button>
            </li>              
            )}
    </ul>
</nav>

  );
}

export default Header;
