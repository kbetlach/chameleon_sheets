import React from "react";
import StudentTabs from "./StudentTabs";
// import DateTab from "./DateTab";

function TabWrapper(props){
    return (
        <div className="tab-wrapper">
            <StudentTabs setStudentId={props.setStudentId} />
        </div>
    )
}

export default TabWrapper