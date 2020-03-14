import React, { useState, useEffect } from "react";
import GridCol from "./GridCol"
import GridColGuardian from "./GridColGuardian"
import TabWrapper from "./TabWrapper";
import 'moment-timezone';
import './style.css'
import API from '../../utils/API';


function Wrapper() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + dd + yyyy;
    
    const [studentId, setStudentId] = useState();
    const [date, setDate] = useState(today);
    const [user, setUser] = useState();
    const [isGuardian, setIsGuardian] = useState();
    const [sortedLog, setSortedLog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


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
    const dateFunction = (date) => {
        setDate(date)
    }

    const ghostLog = [
        {"time": 0, score:"6"},
        {"time": 1, score:"6"},
        {"time": 2, score:"6"},
        {"time": 3, score:"6"},
        {"time": 4, score:"6"},
        {"time": 5, score:"6"},
        {"time": 6, score:"6"},
        {"time": 7, score:"6"},
        {"time": 8, score:"6"},
        {"time": 9, score:"6"},
        {"time": 10, score:"6"},
        {"time": 11, score:"6"},
        {"time": 12, score:"6"},
        {"time": 13, score:"6"},
        {"time": 14, score:"6"},
        {"time": 15, score:"6"},
        {"time": 16, score:"6"},
        {"time": 17, score:"6"},
        {"time": 18, score:"6"},
        {"time": 19, score:"6"},
        {"time": 20, score:"6"},
        {"time": 21, score:"6"},
        {"time": 22, score:"6"},
        {"time": 23, score:"6"},
    ]

    function compare(a, b) {
        let comparison = 0;
        if (a.time > b.time) {
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
                const logFetch = await API.getLog(studentId, date)
                if (logFetch.data !== null) {
                    let log = logFetch.data.scores;
                    setSortedLog(log.sort(compare));
                    console.log("Sorted Log: ", sortedLog);
                }
                else {setSortedLog(ghostLog)}
                } catch (err) { console.log(err); }
            }
            fetchLogs();
            setIsLoading(false)
            } else { }
        
        }, [studentId, date])

    for (var i = 1; i < columns + 1; i++) {
        columnArray.push("column-" + [i]);
    }

    return (
        <div>
            {(user && user.role) ? (<div class="flexbox"> {(isGuardian) ? (<div class="table-container">
                <TabWrapper setStudentId={studentFunction} setDate={dateFunction} />
                {columnArray.map((column, index) => (
                    <GridColGuardian
                        key={column}
                        startTime={startTime}
                        index={index}
                        studentId={studentId}
                        sortedLog={sortedLog}
                    ></GridColGuardian>
                ))} </div>) : (<div class="table-container">
                    <TabWrapper setStudentId={studentFunction} setDate={dateFunction} />
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
