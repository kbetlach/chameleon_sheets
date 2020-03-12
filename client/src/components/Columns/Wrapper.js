import React, { useState, useEffect } from "react";
import GridCol from "./GridCol"
import GridColGuardian from "./GridColGuardian"
import TabWrapper from "./TabWrapper";
import 'moment-timezone';
import './style.css'
import API from '../../utils/API';


function Wrapper() {
    const [user, setUser] = useState();
    const [isGuardian, setIsGuardian] = useState();
    async function checkYourself() {
        let userPlaceholder = await API.getSelf();
        if (userPlaceholder && (userPlaceholder.data.role === "Guardian")) {
            setIsGuardian(true)
        }
        else {
            setIsGuardian(false)
        }
        setUser(userPlaceholder.data);
    }
    useEffect(() => {
        checkYourself();
    }, [])
    const hours = 6; //This will eventually be user generated
    const columns = (hours * 4); //This MAY eventually be user generated
    const startTime = '08:00'; //This will eventually be user-generated
    const columnArray = [];

    for (var i = 1; i < columns + 1; i++) {
        columnArray.push("column-" + [i]);
    }

    return (
        <div>
            {(user && user.role) ? (<div class="flexbox"> {(isGuardian) ? (<div class="table-container">
                <TabWrapper />
                {columnArray.map((column, index) => (
                    <GridColGuardian
                        key={column}
                        startTime={startTime}
                        index={index}
                    ></GridColGuardian>
                ))} </div>) : (<div class="table-container">
                    <TabWrapper />
                    {columnArray.map((column, index) => (
                        <GridCol
                            key={column}
                            startTime={startTime}
                            index={index}
                        ></GridCol>
                    ))} </div>)}</div>) : (<div className="container">
                        <div className="jumbotron">
                            <div className="text-center" style={{ color: "white", fontSize: "42px", marginBottom: "25px" }}>You must be logged in to view this page</div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Wrapper;
