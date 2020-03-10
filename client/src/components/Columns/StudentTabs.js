import React, { useState, useEffect } from "react";
import './style.css';
import StudentSearch from "../StudentSearch/StudentSearch";
import DateTab from "./DateTab";
import API from "../../utils/API"

function StudentTabs(props) {
  const [search, setSearch] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [currentStudents, setCurrentStudents] = useState([]);
  const [activeStudent, setActiveStudent] = useState();
  const [activeTab, setActiveTab] = useState();
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
    props.setStudentId(event.currentTarget.dataset.studentid)
    console.log("studentId: " + event.currentTarget.dataset.studentid)
  }

  function removeStudentTab(event){
    event.preventDefault();
    API.removeStudentTab(event.currentTarget.dataset.studentid)
    console.log(event.currentTarget.dataset.studentid + " removed from user collection.")
  }

  useEffect(() => {

    let obj = {
      userStudents: currentStudents
    }
    if (currentStudents.length > 0) {
      try {
        API.addStudentToTeacher(obj)
      } catch (err) { console.log(err) }
    }
  }, [currentStudents])

  useEffect(() => {
    console.log(activeStudent,"--------------------------")
    if (activeStudent) {
      async function fetchCurrent() {
        setIsLoading(true);
        try {
          const currentFetch = await API.findStudent(activeStudent)
          let activeFirstName = currentFetch.data[0].name.firstName;
          let activeId = currentFetch.data[0]._id;
          let newCurrentStudent = { firstName: activeFirstName, id: activeId }
          setCurrentStudents(currentStudents => [...currentStudents, newCurrentStudent]);
        } catch (err) { console.log(err); }
      }
      fetchCurrent();
      setIsLoading(false)
    } else { }

  }, [activeStudent])

  // useEffect(() => {
  //   const currentFetch = API.findStudent(activeStudent)
  //   let activeFirstName = currentFetch.data[0].name.firstName;
  //   let activeId = currentFetch.data[0]._id;
  //   let newCurrentStudent = { firstName: activeFirstName, id: activeId }
  //   setCurrentStudents(currentStudents => [...currentStudents, newCurrentStudent]);
  // }, [activeStudent])


  useEffect(() => {
    console.log("===CURRENT===")
    console.log(...currentStudents);
  }, [currentStudents])

  useEffect(() => {

    async function fetchStudents() {
      setIsLoading(true);
      const studentFetch = await API.getStudents()
      setStudentList(studentFetch.data);
    }

    async function fetchUserStudents() {
      try {
        const getCurrentStudents = await API.getUserStudents()
        console.log(getCurrentStudents)
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

  // useEffect(() => {
  //   async function fetchUserStudents() {
  //     try{
  //         const getCurrentStudents = await API.getUserStudents()    
  //         console.log(getCurrentStudents)
  //         if (getCurrentStudents.students.length > 0) {
  //           setCurrentStudents(getCurrentStudents.students)
  //         }
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchUserStudents();
  // },[])

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
      <DateTab className="date-tab" />
    </ul>
  );
}


export default StudentTabs;
