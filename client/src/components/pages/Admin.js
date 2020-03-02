import React from 'react';
import '../../assets/css/style.css';
import StaffCard from '../Cards/StaffCard';
import StudentCard from '../Cards/StudentCard';
import GuardianCard from '../Cards/GuardianCard';
import Header from "../Header"

function Admin() {
    return (
        <div>
            <Header />
            <div className="container container w3-container w3-center w3-animate-opacity" style={{ margin: "auto", width: "75%" }}>
                <StaffCard />
                <StudentCard />
                <GuardianCard />
            </div>
        </div>
    )
}

export default Admin;