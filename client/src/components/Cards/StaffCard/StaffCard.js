import React, { useState } from "react";
import API from "../../../utils/API";
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
import "../CardStyle/cards.css";


function StaffCard() {

  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [lastName, setLastName] = useState();

  const handleSubmit = e => {
    e.preventDefault();

    toast.notify ("Staff added successfully!");

    API.email({ firstName, lastName, email });

    API.saveUser({
      role: "Teacher",
      email: email,
      first_name: firstName,
      last_name: lastName,
      school: "req.user.school,"
    })
    document.getElementById("staffForm").reset();
  }
  
  return (

    <div id = "staffCard" className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginRight: "40px", marginTop: "50px", opacity: ".95", height: "320px" }}>
      <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white", fontSize: "28px", }}>
        Add Staff
      </div>
      <form id="staffForm" onSubmit={handleSubmit} type="submit">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input onChange={e => setFirstName(e.target.value)} id="staffFirstName" required="true" placeholder="First Name">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setLastName(e.target.value)} required="true" id="staffLastName" placeholder="Last Name">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setEmail(e.target.value)} required="true" id="staffEmail" placeholder="Email" type="email">
            </input>
          </li>
          <li>
            <br />
            <input style={{ marginTop: "35px", backgroundColor: "darkslategray", color: "white", borderRadius: "6px", border: ".5px solid white" }} type="submit"></input>
          </li>
        </ul>
      </form>
    </div>

  )
}
export default StaffCard