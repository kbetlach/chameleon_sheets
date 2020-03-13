import React, { useState, useEffect } from "react";
import GridCol from "./GridCol"
import GridColGuardian from "./GridColGuardian"
import TabWrapper from "./TabWrapper";
import 'moment-timezone';
import './style.css'
import API from '../../utils/API';


function Wrapper() {
    const [studentId, setStudentId] = useState();
    const [user, setUser] = useState();
    const [isGuardian, setIsGuardian] = useState();
    const [sortedLog, setSortedLog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + dd + yyyy;

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
    const studentFunction = (id) => {
        setStudentId(id);
    }

    function compare(a, b) {
        let comparison = 0;
        if (a.time.toFixed() > b.time) {
            comparison = 1;
        } else if (a.time < b.time) {
            comparison = -1;
        }
        return comparison;
        }

        useEffect(() => {
            if (studentId) {
                async function fetchLogs() {
                setIsLoading(true);
                try {
                const logFetch = await API.getLog(studentId, today)
                let log = logFetch.data.scores;
                setSortedLog(log.sort(compare));
                console.log("Sorted Log: ", sortedLog);
                } catch (err) { console.log(err); }
            }
            fetchLogs();
            setIsLoading(false)
            } else { }
        
        }, [studentId])

    for (var i = 1; i < columns + 1; i++) {
        columnArray.push("column-" + [i]);
    }

    return (
        <div>
            {(user && user.role) ? (<div class="flexbox"> {(isGuardian) ? (<div class="table-container">
                <TabWrapper setStudentId={studentFunction} />
                {columnArray.map((column, index) => (
                    <GridColGuardian
                        key={column}
                        startTime={startTime}
                        index={index}
                        studentId={studentId}
                        sortedLog={sortedLog}
                    ></GridColGuardian>
                ))} </div>) : (<div class="table-container">
                    <TabWrapper setStudentId={studentFunction} />
                    {columnArray.map((column, index) => (
                        <GridCol
                            key={column}
                            startTime={startTime}
                            index={index}
                            studentId={studentId}
                            sortedLog={sortedLog}
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
