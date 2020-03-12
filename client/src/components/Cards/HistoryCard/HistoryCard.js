import React, { useState, useEffect } from "react";
import API from '../../../utils/API';

function HistoryCard(props) {
  const [logs, setLogs] = useState();
  const [avgScore, setAvgScore] = useState();
  let scoreTotal;
  let count;
  let student=props.student;
  async function getLogs(id){
    scoreTotal = 0;
    count = 0;
    let logPlaceholder = await API.getLogs(id);
    if(logPlaceholder && logPlaceholder.data){
        setLogs(logPlaceholder.data)
        for(let i = 0; i < logPlaceholder.data.length(); i++){
          for (let j = 0; j < logPlaceholder.data[i].scores.length(); j++){
            if((logPlaceholder.data[i].scores[j].score > 0) && (logPlaceholder.data[i].scores[j].score <6)){
              scoreTotal =+ logPlaceholder.data[i].scores[j].score
              count++
            }
          }
        }
        setAvgScore(scoreTotal/count);
    }
}

  //<i class="fas fa-file-export"></i>

  return (
    <div className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginLeft: "50px", marginTop: "50px", opacity: ".95" }}>
      <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white" }}>
      {(student && student.name) ? (<div>{student.name.firstName} {student.name.lastName}</div>):(<div>No Name</div>)}
      </div>
      <form>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
          {(student && student.name) ? (<div>{student.name.firstName} {student.name.lastName}</div>):(<div>No Name</div>)}
          </li>
          <li className="list-group-item">
          {(avgScore) ? (<div>Average score:  {avgScore}</div>):(<div>No scores available</div>)}
          </li>
          <li className="list-group-item">
          Other Stuff
          </li>
          <li className="list-group-item">
          Other Stuff
            <br />
            <button style={{ marginTop: "20px", backgroundColor: "darkslategray", color: "white", borderRadius: "6px", border: ".5px solid white" }} type="submit">
              A Button That Will Do Something
            </button>
          </li>
        </ul>

      </form>
    </div>
  )
}
export default HistoryCard