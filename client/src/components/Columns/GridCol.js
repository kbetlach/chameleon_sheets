import React, { useState } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './style.css'
import API from '../../utils/API';
// import axios from "axios";

function GridCol({startTime, index}){
    const [rating, setRating] = useState(0)
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + dd + yyyy;
    let time = <Moment parse="HH:mm" format="h:mm" add={{ minutes: (15*index) }}>{startTime}</Moment>
    let tc = "tc";
    //today shows up as 03072020
    // let user = API.getUser("5e63da3f1dcb5b1f1ec2bc81")

    //axios.get("/api/dayLog") POSSIBLE INTERVAL FUNCTION?
    //We will have to tell the db to put the scores in where the db time field is equal to the column with the matching dataset.time, then set the rating of the column to the score we pulled

    function handleCellClick(e){
        e.preventDefault();
        let lastClick = parseInt(e.currentTarget.dataset.value);
        let thisTime = e.currentTarget.dataset.time
        if (rating === lastClick) {
            setRating(0)
            // let data = {
            //     date: today,
            //     student: student.Id,
            //     score: [{
            //         time: thisTime,
            //         score: rating,
            //         recordedBy: user.Id
            //     }]
            // }
            // axios.update("/api/dayLog", data);
        }
        else if (rating === 0) {
            setRating(lastClick)
            let data = {
                date: today,
                // student: student.Id,
                score: [{
                    time: thisTime,
                    score: rating,
                    // recordedBy: user.Id
                }]
            }
            API.createLog(data);
            console.log(data)
        }
        else {
            setRating(lastClick)
            // let data = {
            //     date: today,
            //     student: student.Id,
            //     scores: [{
            //         time: thisTime,
            //         score: rating,
            //         recordedBy: user.Id
            //     }]
            // }
            // axios.update("/api/dayLog", data);
        }
        console.log(e.currentTarget.dataset.time)
    }
    

    
    return (<table className="floaTable">
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
                            onClick={handleCellClick}>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="fourRow" 
                            style={{background: rating === 4 ? "orange" : "inherit"}} 
                            data-value={4}
                            data-time={tc + index}
                            onClick={handleCellClick}>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="threeRow" 
                            style={{background: rating === 3 ? "yellow" : "inherit"}} 
                            data-value={3} 
                            data-time={tc + index}
                            onClick={handleCellClick}>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="twoRow" 
                            style={{background: rating === 2 ? "limegreen" : "inherit"}} 
                            data-value={2} 
                            data-time={tc + index}
                            onClick={handleCellClick}>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="oneRow" 
                            style={{background: rating === 1 ? "green" : "inherit"}} 
                            data-value={1} 
                            data-time={tc + index}
                            onClick={handleCellClick}>
                        </td>
                    </tr>
                </tbody>
            </table>)
}

export default GridCol;