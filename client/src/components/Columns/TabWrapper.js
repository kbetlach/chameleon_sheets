import React from "react";
import StudentTabs from "./StudentTabs";
import StudentTabsDisabled from "./StudentTabsDisabled";
// import DateTab from "./DateTab";

function TabWrapper(props){
    return (
        <div className="tab-wrapper">
            {props.disabled ? (
                <StudentTabsDisabled setStudentId={props.setStudentId} setActiveTab={props.setActiveTab} setDate={props.setDate}/>
            ):(
                <StudentTabs setStudentId={props.setStudentId} setActiveTab={props.setActiveTab} setDate={props.setDate}/>
            )}
        </div>
    )
}

export default TabWrapper