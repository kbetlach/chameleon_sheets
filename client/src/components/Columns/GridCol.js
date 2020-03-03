import React, { useState } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './style.css'

function GridCol({startTime, index}){
    const [rating, setValue] = useState(0)
    //Future: Make one handle event that passes through a parameter, send the parameter through the <td> to make it function correctly.

    function handleCellClick(e){
        e.preventDefault();
        let newRating = parseInt(e.currentTarget.dataset.value);
        if (rating === newRating) {
            setValue(0)
        }
        else if (rating === 0) {
            setValue(newRating)
        }
        else {
            setValue(newRating)
        }
        console.log("rating: " + typeof rating)
        console.log("data value: " + typeof newRating)
    }
    
    return (<table className="floaTable">
                <tbody >
                    <tr className="timeRow">
                        <th><Moment parse="HH:mm" format="h:mm" add={{ minutes: (15*index) }}>{startTime}</Moment></th>
                    </tr>
                    <tr>
                        <td className="fiveRow" style={{background: rating === 5 ? "red" : "inherit"}} data-value={5} onClick={handleCellClick}></td>
                    </tr>
                    <tr>
                        <td className="fourRow" style={{background: rating === 4 ? "orange" : "inherit"}} data-value={4} onClick={handleCellClick}></td>
                    </tr>
                    <tr>
                        <td className="threeRow" style={{background: rating === 3 ? "yellow" : "inherit"}} data-value={3} onClick={handleCellClick}></td>
                    </tr>
                    <tr>
                        <td className="twoRow" style={{background: rating === 2 ? "limegreen" : "inherit"}} data-value={2} onClick={handleCellClick}></td>
                    </tr>
                    <tr>
                        <td className="oneRow" style={{background: rating === 1 ? "green" : "inherit"}} data-value={1} onClick={handleCellClick}></td>
                    </tr>
                </tbody>
            </table>)
}

export default GridCol;