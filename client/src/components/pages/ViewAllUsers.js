import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import './pages.css';
import API from '../../utils/API';
import "../Cards/CardStyle/cards.css"

function ViewAll() {
    const [isAdmin, setIsAdmin] = useState();
    const [teachers, setTeachers] = useState();
    const [students, setStudents] = useState();
    const [guardians, setGuardians] = useState();
    async function checkYourself() {
        let userPlaceholder = await API.getSelf();
        if (userPlaceholder && (userPlaceholder.data.role === "Admin")) {
            setIsAdmin(true)
        }
        else {
            setIsAdmin(false)
        }
    }
    useEffect(() => {
        checkYourself();
    }, [])
    async function getUsers() {
        let teacherPlaceholder = await API.getTeachers();
        if (teacherPlaceholder && teacherPlaceholder.data) {
            setTeachers(teacherPlaceholder.data)
        }
        let guardianPlaceholder = await API.getGuardians();
        if (guardianPlaceholder && guardianPlaceholder.data) {
            setGuardians(guardianPlaceholder.data)
        }
        let studentPlaceholder = await API.getStudents();
        if (studentPlaceholder && studentPlaceholder.data) {
            setStudents(studentPlaceholder.data)
        }
        console.log(teacherPlaceholder.data)
        console.log(studentPlaceholder.data)
        console.log(guardianPlaceholder.data)
    }
    useEffect(() => {
        getUsers();
    }, [])
    var handleDelete = function handleDeleteUser(id){
        window.location.reload(false); API.deleteUser({id: id})
    }
    return (
        <div>
            {(isAdmin) ? (
                <div style={{ fontFamily: 'Barlow Condensed', margin: "auto", width: "100%" }}>
                    <Header />
                    <div id="viewAllUsers" className="container container w3-container w3-center w3-animate-opacity">
                        {/* <h1 className="text-center" style={{ color: "white", fontSize: "45px", textDecoration: "none" }}>All Users</h1> */}
                        <div className="row">
                            <div className="col-md-4" style={{ color: "darkslategray", fontSize: "28px", textDecoration: "underline" }}>
                                {(teachers && teachers[0]) ? (<div>
                                    <div id="teacherCard" className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginRight: "40px", marginTop: "30px", opacity: ".95" }}>
                                        <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white" }}>
                                            Teachers
                            </div>
                                        <ul className="list-group list-group-flush" style={{ overflowY: "scroll", maxHeight: "320px", fontSize: "19px" }}>
                                            {teachers.map(result => (
                                                <li className="list-group-item">
                                                    <div className="col-md-12 scroll">{result.first_name} {result.last_name} <i onClick = {()=>handleDelete(result._id)} style = {{marginLeft: "15px", cursor: "pointer"}}class="fas fa-trash-alt"></i></div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>) : (<div>No Teachers</div>)}
                            </div>
                            <div className="col-md-4" style={{ color: "darkslategray", fontSize: "28px", textDecoration: "underline" }}>
                                {(students && students[0]) ? (<div>
                                    <div id="teacherCard" className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginRight: "40px", marginTop: "30px", opacity: ".95" }}>
                                        <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white" }}>
                                            Students
                            </div>
                                        <ul className="list-group list-group-flush" style={{ overflowY: "scroll", maxHeight: "320px", fontSize: "19px" }}>
                                            {students.map(result => (
                                                <li className="list-group-item">
                                                    <div className="col-md-12 scroll">{result.name.firstName} {result.name.lastName} <i onClick = {()=>handleDelete(result._id)} style = {{marginLeft: "15px", cursor: "pointer"}}class="fas fa-trash-alt"></i></div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>) : (<div>No Students</div>)}
                            </div>
                            <div className="col-md-4" style={{ color: "darkslategray", fontSize: "28px", textDecoration: "underline" }}>
                                {(guardians && guardians[0]) ? (<div>
                                    <div id="teacherCard" className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginRight: "40px", marginTop: "30px", opacity: ".95", overflowY: "scroll", maxHeight: "300px" }}>
                                        <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white" }}>
                                            Guardians
                            </div>
                                        <ul className="list-group list-group-flush" style={{ overflowY: "scroll", maxHeight: "320px", fontSize: "19px" }}>
                                            {guardians.map(result => (
                                                <li className="list-group-item">
                                                    <div className="col-md-12 scroll">{result.first_name} {result.last_name} <i onClick = {()=>handleDelete(result._id)} style = {{marginLeft: "15px", cursor: "pointer"}}class="fas fa-trash-alt"></i></div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>) : (<div>No Teachers</div>)}
                            </div>
                        </div>
                    </div>
                    </div>) : (<div className="container">
                        <div className = "jumbotron">
                    <div className="text-center" style={{ color: "white", fontSize: "42px", marginBottom: "25px" }}>You must be an admin to view this page</div>
                </div>
                </div>
                )}
        </div>
    )
}
export default ViewAll;


// function ViewAll() {
//     const [isAdmin, setIsAdmin] = useState();
//     const [teachers, setTeachers] = useState();
//     const [students, setStudents] = useState();
//     const [guardians, setGuardians] = useState();    
//     const [deleteID, setDeleteID] = useState();

//     async function checkYourself() {
//         let userPlaceholder = await API.getSelf();
//         if (userPlaceholder && (userPlaceholder.data.role === "Admin")) {
//             setIsAdmin(true)
//         }
//         else {
//             setIsAdmin(false)
//         }
//     }
//     useEffect(() => {
//         checkYourself();
//     }, [])
//     async function getUsers() {
//         let teacherPlaceholder = await API.getTeachers();
//         if (teacherPlaceholder && teacherPlaceholder.data) {
//             setTeachers(teacherPlaceholder.data)
//         }
//         let guardianPlaceholder = await API.getGuardians();
//         if (guardianPlaceholder && guardianPlaceholder.data) {
//             setGuardians(guardianPlaceholder.data)
//         }
//         let studentPlaceholder = await API.getStudents();
//         if (studentPlaceholder && studentPlaceholder.data) {
//             setStudents(studentPlaceholder.data)
//         }
//         console.log(teacherPlaceholder.data)
//         console.log(studentPlaceholder.data)
//         console.log(guardianPlaceholder.data)
//     }
//     useEffect(() => {
//         getUsers();
//     }, [])
//     var handleDelete = function handleDeleteUser() {
//         API.deleteUser({ id: {deleteID}})
//         console.log("deleted")
//     }
//     return (
//         <div>
//             {(true) ? (
//                 <div style={{ fontFamily: 'Barlow Condensed', margin: "auto", width: "100%" }}>
//                     <Header />
//                     <div id="viewAllUsers" className="container container w3-container w3-center w3-animate-opacity">
//                         {/* <h1 className="text-center" style={{ color: "white", fontSize: "45px", textDecoration: "none" }}>All Users</h1> */}
//                         <div className="row">
//                             <div className="col-md-4" style={{ color: "darkslategray", fontSize: "28px", textDecoration: "underline" }}>
//                                 {(teachers && teachers[0]) ? (<div>
//                                     <div id="teacherCard" className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginRight: "40px", marginTop: "30px", opacity: ".95" }}>
//                                         <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white" }}>
//                                             Teachers
//                             </div>
//                                         <ul className="list-group list-group-flush" style={{ overflowY: "scroll", maxHeight: "320px", fontSize: "19px" }}>
//                                             {teachers.map(result => (
//                                                 <li className="list-group-item">
//                                                     <div className="col-md-12 scroll">{result.first_name} {result.last_name} <i onClick= {e=> setDeleteID(e._id)} type="button" data-target="#deleteModal" data-toggle="modal" style={{ marginLeft: "15px", cursor: "pointer" }} class="fas fa-trash-alt"></i></div>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>) : (<div>No Teachers</div>)}
//                             </div>
//                             <div className="col-md-4" style={{ color: "darkslategray", fontSize: "28px", textDecoration: "underline" }}>
//                                 {(students && students[0]) ? (<div>
//                                     <div id="teacherCard" className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginRight: "40px", marginTop: "30px", opacity: ".95" }}>
//                                         <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white" }}>
//                                             Students
//                             </div>
//                                         <ul className="list-group list-group-flush" style={{ overflowY: "scroll", maxHeight: "320px", fontSize: "19px" }}>
//                                             {students.map(result => (
//                                                 <li className="list-group-item">
//                                                     <div className="col-md-12 scroll">{result.name.firstName} {result.name.lastName} <i onClick= {e=> setDeleteID(e._id)} type="button" data-target="#deleteModal" data-toggle="modal" style={{ marginLeft: "15px", cursor: "pointer" }} class="fas fa-trash-alt"></i></div>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>) : (<div>No Students</div>)}
//                             </div>
//                             <div className="col-md-4" style={{ color: "darkslategray", fontSize: "28px", textDecoration: "underline" }}>
//                                 {(guardians && guardians[0]) ? (<div>
//                                     <div id="teacherCard" className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginRight: "40px", marginTop: "30px", opacity: ".95"}}>
//                                         <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white" }}>
//                                             Guardians
//                             </div>
//                                         <ul className="list-group list-group-flush" style={{ overflowY: "scroll", maxHeight: "320px", fontSize: "19px" }}>
//                                             {guardians.map(result => (
//                                                 <li className="list-group-item">
//                                                     <div className="col-md-12 scroll">{result.first_name} {result.last_name} <i onClick= {e=> setDeleteID(e._id)} type="button" data-target="#deleteModal" data-toggle="modal" style={{ marginLeft: "15px", cursor: "pointer" }} class="fas fa-trash-alt"></i></div>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>) : (<div>No Teachers</div>)}
//                             </div>
//                         </div>
//                     </div>
//                     <div aria-hidden="true" aria-labelledby="deleteModalLabel" class="modal fade" id="deleteModal" role="dialog" tabindex="-1">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header" style = {{backgroundColor: "darkslategray"}}>
//                                     <h5 style = {{color: 'white'}} class="modal-title" id="loginModal">Wait!</h5>
//                                     <button style = {{color: 'white'}} aria-label="Close" class="close" data-dismiss="modal" type="button">
//                                         <span aria-hidden="true">&times;</span>
//                                     </button>
//                                 </div>
//                                 <div>
//                                     <div class="modal-body">
//                                         <div style={{textAlign: "left", fontSize: "20px"}}>
//                                        Are you sure you want to delete this user?
//                                         </div>
//                                     </div>
//                                     <div class="modal-footer">
//                                         <button className="btn btn-secondary" data-dismiss="modal" type="button">No</button>
//                                         <button className="btn" type="submit" onClick={result => handleDelete(result.deleteID)} style = {{color: 'white', backgroundColor: "darkslategray", border: '.5 px solid white'}}>Yes</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>) : (<div className="container">
//                     <div className="jumbotron">
//                         <div className="text-center" style={{ color: "white", fontSize: "42px", marginBottom: "25px" }}>You must be an admin to view this page</div>
//                     </div>
//                 </div>
//                 )}
//         </div>
//     )
// }
// export default ViewAll;