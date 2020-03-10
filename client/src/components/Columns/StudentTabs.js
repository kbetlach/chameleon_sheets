import React, { useState, useEffect } from "react";
import './style.css';
import StudentSearch from "../StudentSearch/StudentSearch";
import DateTab from "./DateTab";
import API from "../../utils/API"

function StudentTabs() {
  const [search, setSearch] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [currentStudents, setCurrentStudents] = useState([]);
  const [activeStudent, setActiveStudent] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(event) {
    const value = event.target.value;
    setSearch(value);
  };

  function handleStudentSelect(event) {
    event.preventDefault();
    setActiveStudent(event.currentTarget.dataset.value);
  }

  function handleTabClick(event) {
    event.preventDefault();
    setActiveTab(event.currentTarget.dataset.studentid);
    console.log("studentId: " + event.currentTarget.dataset.studentid)
  }

  useEffect(() => {
    async function fetchCurrent() {
      setIsLoading(true);
      const currentFetch = await API.findStudent(activeStudent)
        let activeFirstName = currentFetch.data[0].name.firstName;
        let activeId = currentFetch.data[0]._id;
        let newCurrentStudent = { firstName: activeFirstName, id: activeId }
        setCurrentStudents(currentStudents => [...currentStudents, newCurrentStudent]);
    }
      fetchCurrent();
      setIsLoading(false)
  }, [activeStudent])


  useEffect(() => {
    console.log("===CURRENT===")
    console.log(...currentStudents);
  },[currentStudents])

  useEffect(() => {

    async function fetchStudents() {
      setIsLoading(true);
        const studentFetch = await API.getStudents()
        setStudentList(studentFetch.data);
    }
    fetchStudents();
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
          style={{backgroundColor: activeTab === student.id ? "darkslategray" : "#181d27"}}
          >
        <a href="#" className="nav-link">
          {student.firstName}
        </a>
      </li>
      ))}
      {/* <li className="nav-item nav-student">
        <a href="#" className="nav-link">
          Student 1
        </a>
      </li>
      <li className="nav-item nav-student">
        <a href="#" className="nav-link">
          Student 2
        </a>
      </li>
      <li className="nav-item nav-student">
        <a href="#" className="nav-link">
          Student 3
        </a>
      </li>
      <li className="nav-item nav-student">
        <a href="#" className="nav-link">
          Student 4
        </a>
      </li> */}
      <StudentSearch
        search={search}
        value={search}
        handleInputChange={handleInputChange}
        // handleFormSubmit={handleFormSubmit}
        StudentList={studentList}
        activeStudentChange={handleStudentSelect}
      />
      <DateTab className="date-tab" />
    </ul>
  );
}


export default StudentTabs;
