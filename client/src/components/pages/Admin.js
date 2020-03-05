import React from 'react';
import './pages.css';
import StaffCard from '../Cards/StaffCard/StaffCard';
import StudentCard from '../Cards/StudentCard/StudentCard';
import GuardianCard from '../Cards/GuardianCard/GuardianCard';
import Header from "../Header/Header";

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