import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './style.css'
import API from '../../utils/API';
// import axios from "axios";

function GridCol({startTime, index, studentId}){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + dd + yyyy;
    let time = <Moment parse="HH:mm" format="h:mm" add={{ minutes: (15*index) }}>{startTime}</Moment>
    let tc = "tc";

    const [rating, setRating] = useState(6);
    const [timeCode, setTimeCode] = useState("");
    const [activeDate, setActiveDate] = useState(today);
    const [isLoading, setIsLoading] = useState(false);
    
    // let user = API.getSelf();

    useEffect(() => {
        if (studentId) {
            setRating(6)
            async function fetchLogs() {
            setIsLoading(true);
            try {
            const logFetch = await API.getLog(studentId, today)
            console.log(logFetch.data.scores, "EJEJEJEJEJ")
            let log = logFetch.data.scores;
            for (var i = 0; i < log.length; i++){
                if (log[i].time == index){
                    setRating(log[i].score)
                }
            }
            } catch (err) { console.log(err); }
        }
        fetchLogs();
        setIsLoading(false)
        } else { }
    
    }, [studentId])


    useEffect( () => {
        console.log("YEET", activeDate);
        if (rating === 6) {}
        else {
            let data = {
                date: activeDate,
                student: studentId,
                scores: {
                    time: index,
                    score: rating
                }
            }
            API.createLog(data)
            console.log(data);
        }
    },[timeCode])
    //today shows up as 03072020
    // let user = API.getUser("5e63da3f1dcb5b1f1ec2bc81")

    //axios.get("/api/dayLog") POSSIBLE INTERVAL FUNCTION?
    //We will have to tell the db to put the scores in where the db time field is equal to the column with the matching dataset.time, then set the rating of the column to the score we pulled

    function handleCellClick(e){
        e.preventDefault();
        let lastClick = parseInt(e.currentTarget.dataset.value);
        setTimeCode(e.currentTarget.dataset.time)
        if (!studentId) {
            console.log("Please add a student to begin entering data.")
        }
        else if (rating === lastClick) {
            setRating(0)
        }
        else if (rating === 6) {
            setRating(lastClick)
        }
        else {
            setRating(lastClick)
        }
    }
    return (<table className="floaTable" id={"gridcol" + index}>
                <tbody >
                    <tr className="timeRow">
                        <th>{time}</th>
                    </tr>
                    <tr>
                        <td 
                            className="fiveRow" 
                            style={{background: rating === 5 ? "red" : "inherit"}} 
                            data-value={5}
                            data-time={tc + index}
                            index={index}
                            onClick={handleCellClick}>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="fourRow" 
                            style={{background: rating === 4 ? "orange" : "inherit"}} 
                            data-value={4}
                            data-time={tc + index}
                            index={index}
                            onClick={handleCellClick}>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="threeRow" 
                            style={{background: rating === 3 ? "yellow" : "inherit"}} 
                            data-value={3} 
                            data-time={tc + index}
                            index={index}
                            onClick={handleCellClick}>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="twoRow" 
                            style={{background: rating === 2 ? "limegreen" : "inherit"}} 
                            data-value={2} 
                            data-time={tc + index}
                            index={index}
                            onClick={handleCellClick}>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="oneRow" 
                            style={{background: rating === 1 ? "green" : "inherit"}} 
                            data-value={1} 
                            data-time={tc + index}
                            index={index}
                            onClick={handleCellClick}>
                        </td>
                    </tr>
                </tbody>
            </table>)
}

export default GridCol;