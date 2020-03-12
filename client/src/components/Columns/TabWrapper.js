import React from "react";
import StudentTabs from "./StudentTabs";
// import DateTab from "./DateTab";

function TabWrapper(props){
    return (
        <div className="tab-wrapper">
            <StudentTabs setStudentId={props.setStudentId} setActiveTab={props.setActiveTab} />
        </div>
    )
}

export default TabWrapper