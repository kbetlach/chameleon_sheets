import React from "react";
import Header from "../Header/Header";
import './pages.css';

function ViewAll() {
    return (
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
        </div>
    )
    }
export default ViewAll;