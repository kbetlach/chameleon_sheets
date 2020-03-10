import React, { useState, useReducer } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './style.css'
import API from '../../utils/API';
import axios from "axios";

function GridCol({startTime, index}){
    const [rating, setValue] = useState(0)
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + dd + yyyy;
    let time = <Moment parse="HH:mm" format="h:mm" add={{ minutes: (15*index) }}>{startTime}</Moment>
    let tc = "tc-";

    
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
                            data-time={tc + index}>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="fourRow" 
                            style={{background: rating === 4 ? "orange" : "inherit"}} 
                            data-value={4}
                            data-time={tc + index}>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="threeRow" 
                            style={{background: rating === 3 ? "yellow" : "inherit"}} 
                            data-value={3} 
                            data-time={tc + index}>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="twoRow" 
                            style={{background: rating === 2 ? "limegreen" : "inherit"}} 
                            data-value={2} 
                            data-time={tc + index}>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            className="oneRow" 
                            style={{background: rating === 1 ? "green" : "inherit"}} 
                            data-value={1} 
                            data-time={tc + index}>
                        </td>
                    </tr>
                </tbody>
            </table>)
}

export default GridCol;