import React from 'react';
import '../../assets/css/style.css';
import StaffCard from '../StaffCard';
import StudentCard from '../StudentCard';
import GuardianCard from '../GuardianCard';
import Footer from "../Footer"
import { Link } from "react-router-dom";



function AddUser() {
    return (
    <div>
        <div className = "container container w3-container w3-center w3-animate-opacity" style={{margin: "auto", width: "75%"}}>
            <StaffCard />
            <StudentCard />
            <GuardianCard />
        </div>
            <Footer />
    </div>


    )
}

export default AddUser;