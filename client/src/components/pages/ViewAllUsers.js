import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import './pages.css';
import API from '../../utils/API';

function ViewAll() {
    const [isAdmin, setIsAdmin] = useState();
    const [teachers, setTeachers] = useState();
    const [students, setStudents] = useState();
    const [guardians, setGuardians] = useState();
    async function checkYourself(){
        let userPlaceholder = await API.getSelf();
        if(userPlaceholder && (userPlaceholder.data.role === "Admin")){
            setIsAdmin(true)
        }
        else{
            setIsAdmin(false)
        }
    }
    useEffect(() => {
        checkYourself();
      },[])
    async function getUsers(){
        let teacherPlaceholder = await API.getTeachers();
        if(teacherPlaceholder && teacherPlaceholder.data){
            setTeachers(teacherPlaceholder.data)
        }
        let guardianPlaceholder = await API.getGuardians();
        if(guardianPlaceholder && guardianPlaceholder.data){
            setGuardians(guardianPlaceholder.data)
        }
        let studentPlaceholder = await API.getStudents();
        if(studentPlaceholder && studentPlaceholder.data){
            setStudents(studentPlaceholder.data)
        }
        console.log(teacherPlaceholder.data)
        console.log(guardianPlaceholder.data)
        console.log(studentPlaceholder.data)
    }
    useEffect(() => {
        getUsers();
      },[])
    return (
        <div>
            {(isAdmin) ? (
                <div>
                    <Header />
                    <div className="container container w3-container w3-center w3-animate-opacity" style={{ margin: "auto", width: "75%" }}>
                        <div className="jumbotron">
                            <h1 className="text-center" style={{color: "white", fontSize: "42px", marginBottom: "25px"}}>All Users</h1>

                            <div className="row">
                                <div className="col-md-4" style={{color: "white", fontSize: "28px", textDecoration: "underline"}}>Teachers</div>
                                <div className="col-md-4" style={{color: "white", fontSize: "28px", textDecoration: "underline"}}>Students</div>
                                <div className="col-md-4" style={{color: "white", fontSize: "28px", textDecoration: "underline"}}>Guardians</div>
                            </div>

                        </div>
                    </div>
                </div>) : (<div className="jumbotron">
                <h1 className="text-center" style={{color: "white", fontSize: "42px", marginBottom: "25px"}}>You must be an admin to view this page</h1>
                </div>
)}
        </div>
    )
    }
export default ViewAll;