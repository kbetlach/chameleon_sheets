import React, { useState } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './style.css'

function GridCol({startTime, index}){
    const [rating, setValue] = useState(0)
    //Future: Make one handle event that passes through a parameter, send the parameter through the <td> to make it function correctly.

    function handleFive() {
        if (rating === 5) {
            setValue(0)
            //delete method here
        }
        else if (rating === 0){
            setValue(5);
            //post method here
        } 
        else {
            setValue(5);
            //update method here
        }
        console.log(rating)
    }

    function handleFour() {
        if (rating === 4) {
            setValue(0)
        }
        else {
            setValue(4);
        } 
        console.log(rating)
    }

    function handleThree() {
        if (rating === 3) {
            setValue(0)
        }
        else {
            setValue(3);
        } 
        console.log(rating)
    }

    function handleTwo() {
        if (rating === 2) {
            setValue(0)
        }
        else {
            setValue(2);
        }         console.log(rating)
    }

    function handleOne() {
        if (rating === 1) {
            setValue(0)
        }
        else {
            setValue(1);
        } 
        console.log(rating)
    }
    
    return (<table className="floaTable">
                <tbody >
                    <tr className="timeRow">
                        <th><Moment parse="HH:mm" format="h:mm" add={{ minutes: (15*index) }}>{startTime}</Moment></th>
                    </tr>
                    <tr>
                        <td className="fiveRow" style={{background: rating === 5 ? "red" : "inherit"}} onClick={handleFive}></td>
                    </tr>
                    <tr>
                        <td className="fourRow" style={{background: rating === 4 ? "orange" : "inherit"}} onClick={handleFour}></td>
                    </tr>
                    <tr>
                        <td className="threeRow" style={{background: rating === 3 ? "yellow" : "inherit"}} onClick={handleThree}></td>
                    </tr>
                    <tr>
                        <td className="twoRow" style={{background: rating === 2 ? "limegreen" : "inherit"}} onClick={handleTwo}></td>
                    </tr>
                    <tr>
                        <td className="oneRow" style={{background: rating === 1 ? "green" : "inherit"}} onClick={handleOne}></td>
                    </tr>
                </tbody>
            </table>)
}

export default GridCol;