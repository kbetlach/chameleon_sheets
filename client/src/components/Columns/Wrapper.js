import React from "react";
import GridCol from "./GridCol"
import Submit from "./Submit"
import TabWrapper from "./TabWrapper";
import 'moment-timezone';
import './style.css'


function Wrapper() {

    const hours = 6; //This will eventually be user generated
    const columns = (hours * 4); //This MAY eventually be user generated
    const startTime = '08:00'; //This will eventually be user-generated
    const columnArray = [];

    for (var i = 1; i < columns + 1; i++){
        columnArray.push("column-"+[i]);
    }
    
    return(
        <div class="flexbox">
            <div class="table-container">
                <TabWrapper />
                    {columnArray.map((column, index) => (
                        <GridCol 
                            key={column}
                            startTime={startTime}
                            index={index}
                        ></GridCol>
                    ))}
                <Submit></Submit>
            </div>
        </div>
    )
}

export default Wrapper;
