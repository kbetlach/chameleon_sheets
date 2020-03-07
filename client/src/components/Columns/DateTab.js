import React from "react";
import "./style.css"

function DateTab(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    today = mm + '/' + dd;

    return (
        <li className="nav-item date-tab">
            <a href="#" className="nav-link">
            {today}
            </a>
        </li>
    )
}

export default DateTab