import React, { useState, useEffect } from "react";
import GridCol from "./GridCol"
// import Submit from "./Submit"
import TabWrapper from "./TabWrapper";
import 'moment-timezone';
import './style.css'
import API from "../../utils/API"


function Wrapper() {
    const [studentId, setStudentId] = useState();
    const hours = 6; //This will eventually be user generated
    const columns = (hours * 4); //This MAY eventually be user generated
    const startTime = '08:00'; //This will eventually be user-generated
    const columnArray = [];
    const studentFunction = (id) =>{
        setStudentId(id);
    }

    document.getElementsByClassName("nav-student").onclick = function(){
        
    }

    for (var i = 1; i < columns + 1; i++){
        columnArray.push("column-"+[i]);
    }
    
    return(
        <div class="flexbox">
            <div class="table-container">
                <TabWrapper setStudentId={studentFunction} />
                    {columnArray.map((column, index) => (
                        <GridCol 
                            key={column}
                            startTime={startTime}
                            index={index}
                            studentId={studentId}
                        ></GridCol>
                    ))}
                {/* <Submit></Submit> */}
            </div>
        </div>
    )
}

export default Wrapper;
