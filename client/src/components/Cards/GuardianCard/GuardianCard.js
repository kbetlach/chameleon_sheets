import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import "../CardStyle/cards.css";
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

//Sets currently selected students ID as 'student'
function studentSelect (e) {
  // console.log(studentData);
  let filtered = studentData.filter(student => {
    let name = student.name.firstName + " " + student.name.lastName
    return name == e.currentTarget.value
  })
  // console.log(filtered)
  let studentDataSave = {
    firstName: filtered[0].name.firstName,
    lastName: filtered[0].name.lastName,
    id: filtered[0]._id
  }
  setStudent(studentDataSave);
}

useEffect(() => {
    getStudents();
  },[])

  const handleSubmit = e => {

    e.preventDefault();
    toast.notify("Guardian added successfully!");

    API.email({ firstName, lastName, email, student, role });

    API.saveUser({
      role: role,
      email: email,
      first_name: firstName,
      last_name: lastName,
      students: [student]    
    });

    // console.log(student);
    document.getElementById("guardianForm").reset();
  }

  return (
    <div id = "guardianCard" className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginLeft: "40px", marginTop: "50px", opacity: ".95", height: "320px" }}>
      <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white", fontSize: "28px", }}>
        Add Guardian
      </div>
      <form id="guardianForm" onSubmit={handleSubmit} type="submit">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input onChange={e => {setFirstname(e.target.value); console.log(e.target.value)}} name="firstName" id="guardianFirstName" required="true" placeholder="First Name">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setLastName(e.target.value)} required="true" id="guardianLastName" placeholder="Last Name" name="lastName">
            </input>
          </li>
          <li className="list-group-item">
            <input onChange={e => setEmail(e.target.value)} required="true" id="guardianEmail" placeholder="Email" type="email">
            </input>
          </li>
          <li className="list-group-item">
            <label for="students">Select a student: </label>
            {(studentData && studentData[0]) ? (
            <select id="students" onChange={studentSelect} style={{ backgroundColor: "white", color: "darkslategray", borderRadius: "6px", border: ".5px solid darkslategray", marginLeft: "5px" }}>
              {studentData.map(result => (
                <option id={result._id}>
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