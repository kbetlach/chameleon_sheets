import React from "react";
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

function StudentCard() {

  //toast.notify ("Student added successfully!");

  return (
    <div className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginLeft: "50px", marginTop: "50px", opacity: ".95" }}>
      <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white" }}>
        Add Student
      </div>
      <form>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input placeholder="First Name">
            </input>
          </li>
          <li className="list-group-item">
            <input placeholder="Last Name">
            </input>
          </li>
          <li className="list-group-item">
            <input placeholder="Hours">
            </input>
          </li>
          <li className="list-group-item">
            <input placeholder="Start">
            </input>
            <br />
            <input style={{ marginTop: "20px", backgroundColor: "darkslategray", color: "white", borderRadius: "6px", border: ".5px solid white" }} type="submit"></input>
          </li>
        </ul>

      </form>
    </div>
  )
}
export default StudentCard