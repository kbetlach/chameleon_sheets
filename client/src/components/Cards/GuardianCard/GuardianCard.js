import React, { useState, useEffect } from "react";
import axios from 'axios';
import API from "../../../utils/API";
import "../CardStyle/cards.css";
import StudentList from "../../../data/students.json";
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

function GuardianCard() {

  const [firstName, setFirstname] = useState();
  const [email, setEmail] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState("Guardian");
  const [student, setStudent] = useState();
  const [studentData, setStudentData] = useState();


  async function getStudents(){
    let studentPlaceholder = await API.getStudents();
    if(studentPlaceholder && studentPlaceholder.data){
        setStudentData(studentPlaceholder.data)
        console.log(studentPlaceholder.data)

    }
}
useEffect(() => {
    getStudents();
  },[])

  // const results = StudentList.filter(student =>
  //   student.firstName && student.lastName);

  const handleSubmit = e => {
    e.preventDefault();

    toast.notify ("Guardian added successfully!");

    API.email({ firstName, lastName, email, student, role });
    console.log(firstName);
    console.log(role);
    API.saveUser({
      role: role,
      email: email,
      first_name: firstName,
      last_name: lastName,
      students: [student]
      //school: req.user.school,
      
    })
    console.log(student)

    document.getElementById("guardianForm").reset();

  }

  return (
    <div id = "guardianCard" className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginLeft: "40px", marginTop: "50px", opacity: ".95", height: "320px" }}>
      <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white", fontSize: "28px", }}>
        Add Guardian
      </div>
      <form id="guardianForm" onSubmit={handleSubmit}  type="submit">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input onChange={e => setFirstname(e.target.value)} id="guardianFirstName" required="true" placeholder="First Name">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setLastName(e.target.value)} required="true" id="guardianLastName" placeholder="Last Name">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setEmail(e.target.value)} required="true" id="guardianEmail" placeholder="Email" type="email">
            </input>
          </li>
          <li className="list-group-item">
            <label for="students">Select a student: </label>
            {(studentData && studentData[0]) ? (
            <select id="students" style={{ backgroundColor: "white", color: "darkslategray", borderRadius: "6px", border: ".5px solid darkslategray", marginLeft: "5px" }}>
              {studentData.map(result => (
                <option>
                  {result.name.firstName} {result.name.lastName}
                </option>
              ))
              }
            </select> ): (<select>No Students</select>)}
            <br />
            <input style={{ marginTop: "20px", backgroundColor: "darkslategray", color: "white", borderRadius: "6px", border: ".5px solid white" }} type="submit"></input>
          </li>
        </ul>
      </form >
    </div>
  )
}
export default GuardianCard