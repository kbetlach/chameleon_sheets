import React from "react";
import './style.css';
import DateTab from "./DateTab";

function StudentTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item nav-student">
        <a href="#" onClick={() => props.handlePageChange("")} className="nav-link">
          Student 1
        </a>
      </li>
      <li className="nav-item nav-student">
        <a href="#" onClick={() => props.handlePageChange("")} className="nav-link">
        Student 2
        </a>
      </li>
      <li className="nav-item nav-student">
        <a href="#" onClick={() => props.handlePageChange("")} className="nav-link">
        Student 3
        </a>
      </li>
      <li className="nav-item nav-student">
        <a href="#" onClick={() => props.handlePageChange("")} className="nav-link">
        Student 4
        </a>
      </li>
      <DateTab className="date-tab"/>
    </ul>
  );
}

export default StudentTabs;
