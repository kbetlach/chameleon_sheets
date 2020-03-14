import React, { useState, useEffect } from "react";
import './style.css';
import StudentSearch from "../StudentSearch/StudentSearch";
import DateTab from "./DateTab";
import API from "../../utils/API"
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

function StudentTabs(props) {
  const [search, setSearch] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [currentStudents, setCurrentStudents] = useState([]);
  const [activeStudent, setActiveStudent] = useState("");
  const [activeTab, setActiveTab] = useState();
  const [isLoading, setIsLoading] = useState(false);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + dd + yyyy;

  function handleInputChange(event) {
    const value = event.target.value;
    setSearch(value);
  };

  function handleStudentSelect(event) {
    event.preventDefault();
    setActiveStudent(event.currentTarget.dataset.value);
    setActiveTab(event.currentTarget.dataset.value);
    props.setStudentId(event.currentTarget.dataset.value)
  }

  function handleTabClick(event) {
    event.preventDefault();
    setActiveTab(event.currentTarget.dataset.studentid);
    props.setStudentId(event.currentTarget.dataset.studentid)
    console.log("studentId: " + event.currentTarget.dataset.studentid)
  }

  function removeStudentTab(event){
    event.preventDefault();
    setCurrentStudents(currentStudents.filter(item => item.id !== event.currentTarget.dataset.studentid));
    console.log(event.currentTarget.dataset.studentid + " removed from user collection.")
    console.log("Current Students: ", currentStudents)
    window.location.reload(false)
  }

  useEffect(() => {
    if(!activeTab && currentStudents.length>0){ //If there's not an active studentID AND there's a student in the currentStudents array, default to using the ID of the first user in the currentStudents array.
      props.setStudentId(currentStudents[0].id)
      setActiveTab(currentStudents[0].id)
    }
  }, [currentStudents])

  useEffect(() => {

    let obj = {
      userStudents: currentStudents
    }
    if (currentStudents.length > 0) {
      try {
        API.addStudentToTeacher(obj)
      } catch (err) { console.log(err) }
    }
    console.log(currentStudents);
    console.log(activeTab);
  }, [currentStudents])

  useEffect(() => {
    if (activeStudent) {
      async function fetchCurrent() {
        setIsLoading(true);
        try {
          const currentFetch = await API.findStudent(activeStudent)
          console.log(currentFetch)
          let activeFirstName = currentFetch.data[0].name.firstName;
          let activeLastName = currentFetch.data[0].name.lastName;
          let activeId = currentFetch.data[0]._id;
          let newCurrentStudent = { firstName: activeFirstName, lastName: activeLastName, id: activeId }
          setCurrentStudents(currentStudents => [...currentStudents, newCurrentStudent]);
        } catch (err) { console.log(err); }
      }
      fetchCurrent();
      setIsLoading(false)
    } else { }

  }, [activeStudent])

  useEffect(() => {

    async function fetchStudents() {
      setIsLoading(true);
      const studentFetch = await API.getStudents()
      setStudentList(studentFetch.data);
    }

    async function fetchUserStudents() {
      try {
        const getCurrentStudents = await API.getUserStudents()
        console.log(getCurrentStudents.data.students)
        if (getCurrentStudents.data.students.length > 0) {
          setCurrentStudents(getCurrentStudents.data.students)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchStudents();
    fetchUserStudents();
    setIsLoading(false)
  }, [])

  return (
    <ul className="nav nav-tabs">
      {currentStudents.map(student => (
        <li
          className="nav-item nav-student"
          key={student.id}
          data-studentid={student.id}
          onClick={handleTabClick}
          style={{ backgroundColor: activeTab === student.id ? "darkslategray" : "#181d27" }}
        >
          <a href="#" className="nav-link">
            {student.firstName}
          </a>
          <i class="fas fa-times removeStudent" onClick={removeStudentTab} data-studentid={student.id}></i>
        </li>
      ))}

      <StudentSearch
        search={search}
        value={search}
        handleInputChange={handleInputChange}
        // handleFormSubmit={handleFormSubmit}
        StudentList={studentList}
        activeStudentChange={handleStudentSelect}
      />
      <DateTab className="date-tab" setDate={props.setDate}/>
    </ul>
  );
}


export default StudentTabs;
