import React from "react";
import '../assets/css/style.css';

function StudentTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#" onClick={() => props.handlePageChange("")} className="nav-link">
          Student 1
        </a>
      </li>
      <li className="nav-item">
        <a href="#" onClick={() => props.handlePageChange("")} className="nav-link">
        Student 2
        </a>
      </li>
      <li className="nav-item">
        <a href="#" onClick={() => props.handlePageChange("")} className="nav-link">
        Student 3
        </a>
      </li>
      <li className="nav-item">
        <a href="#" onClick={() => props.handlePageChange("")} className="nav-link">
        Student 4
        </a>
      </li>
    </ul>
  );
}

export default StudentTabs;
