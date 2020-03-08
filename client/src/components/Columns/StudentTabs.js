import React, { useState, useEffect } from "react";
import './style.css';
import StudentSearch from "../StudentSearch/StudentSearch";
// import StudentList from "../../data/students.json"
import DateTab from "./DateTab";
import API from "../../utils/API"

function StudentTabs() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [currentStudents, setCurrentStudents] = useState([]);
  const [activeStudent, setActiveStudent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function searchStudent() {
    const searchQuery = search.trim();
    const searchResultsFirstName = studentList.filter((student) => student.name.firstName === searchQuery);
    setResult(searchResultsFirstName);
  };

  function handleInputChange(event) {
    const value = event.target.value;
    // const name = event.target.name;
    setSearch(value);
  };

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   searchStudent();
  // };

  function handleStudentSelect(event) {
    event.preventDefault();
    setActiveStudent(event.currentTarget.dataset.value);
    console.log("This state: " + activeStudent)
    console.log("Dataset: " + event.currentTarget.dataset.value)
    console.log(activeStudent)
  }

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
      <li className="nav-item nav-student">
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
      </li>
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
