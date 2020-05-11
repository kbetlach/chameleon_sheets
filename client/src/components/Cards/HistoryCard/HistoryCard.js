import React, { useState, useEffect } from "react";
import API from '../../../utils/API';
import { ExportToCsv } from 'export-to-csv';
import 'moment-timezone';

function HistoryCard(props) {

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;

const [percentage1, setPercentage1] = useState(0);
const [percentage2, setPercentage2] = useState(0);
const [percentage3, setPercentage3] = useState(0);
const [percentage4, setPercentage4] = useState(0);
const [percentage5, setPercentage5] = useState(0);


 const options = {
   fieldSeparator: ',',
   quoteStrings: '"',
   filename: "Student Data Summary",
   decimalSeparator: '.',
   showLabels: true,
   showTitle: true,
   title: today,
   useTextFile: false,
   useBom: true,
   useKeysAsHeaders: true,
   // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
 };
 
 const exportCSV = (e) => {
   e.preventDefault();
   var data = [
    {
      //Student: student.name.firstName + " " + student.name.lastName,
      Date: today,
      percentAt1: percentage1.toFixed(2),
      percentAt2: percentage2.toFixed(2),
      percentAt3: percentage3.toFixed(2),
      percentAt4: percentage4.toFixed(2),
      percentAt5: percentage5.toFixed(2)
    },
    {
      Student: "",
      Date: "03/14/2020",
      percentAt1: 87.5,
      percentAt2: 4.17,
      percentAt3: 8.33,
      percentAt4: 0,
      percentAt5: 0,
    },
    {
      Student: "",
      Date: "03/15/2020",
      percentAt1: 75,
      percentAt2: 8.33,
      percentAt3: 8.33,
      percentAt4: 4.17,
      percentAt5: 4.17,
    }
  ]
   const csvExporter = new ExportToCsv(options);
   csvExporter.generateCsv(data);
 }

  const [logs, setLogs] = useState();
  const [avgScore, setAvgScore] = useState();
  let scoreTotal;
  let count;
  let student=props.value;
  async function getLogs(id){
    scoreTotal = 0;
    count = 0;
    let logPlaceholder = await API.getLogs(id);
    if(logPlaceholder && logPlaceholder.data){
        setLogs(logPlaceholder.data)
        for(let i = 0; i < logPlaceholder.data.length; i++){
          for (let j = 0; j < logPlaceholder.data[i].scores.length; j++){
            if(logPlaceholder.data[i].scores[j].score === 1){ ones++; }
            if(logPlaceholder.data[i].scores[j].score === 2){ twos++; }
            if(logPlaceholder.data[i].scores[j].score === 3){ threes++; }
            if(logPlaceholder.data[i].scores[j].score === 4){ fours++; }
            if(logPlaceholder.data[i].scores[j].score === 5){ fives++; }
            if((logPlaceholder.data[i].scores[j].score > 0) && (logPlaceholder.data[i].scores[j].score <6)){
              scoreTotal += logPlaceholder.data[i].scores[j].score
              count++
            }
          }
        }
        setAvgScore(scoreTotal/count);
        setPercentage1((ones/count)*100); 
        setPercentage2((twos/count)*100); 
        setPercentage3((threes/count)*100); 
        setPercentage4((fours/count)*100); 
        setPercentage5((fives/count)*100); 
    }
}
useEffect(() => {
  if(student && student.id) {
    getLogs({id: student.id})
  }
},[])
  return (
    <div className="card overflow-auto" style={{ width: "18rem", float: "left", border: "1px solid white", marginLeft: "50px", marginBottom: "50px", opacity: ".95" }}>
      <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white", fontSize: "28px" }}>
      {(student && student.firstName) ? (<div>{student.firstName} {student.lastName}</div>):(<div>No Name</div>)}
      </div>
      <form>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3 text-left">DATE</div>
              <div className="col-md-7 text-left">{(avgScore) ? (<div>Average score:  {avgScore.toFixed(2)}</div>):(<div>No scores available</div>)}</div>
              <div className="col-md-2"><button onClick={exportCSV} style={{backgroundColor: "darkslategray", color: "white", borderRadius: "6px", border: ".5px solid white" }} id="CSV" type="submit">
              <i class="fas fa-file-export"></i></button>
            </div>
          </div>
          </li>
          {/* <li className="list-group-item">
          {(percentage1) ? (<div>1:  {percentage1.toFixed(2)+"%"}</div>):(<div>0.00%</div>)}
          </li>
          <li className="list-group-item">
          {(percentage2) ? (<div>2:  {percentage2.toFixed(2)+"%"}</div>):(<div>0.00%</div>)}
          </li>
          <li className="list-group-item">
          {(percentage3) ? (<div>3:  {percentage3.toFixed(2)+"%"}</div>):(<div>0.00%</div>)}
          </li>
          <li className="list-group-item">
          {(percentage4) ? (<div>4:  {percentage4.toFixed(2)+"%"}</div>):(<div>0.00%</div>)}
          </li>
          <li className="list-group-item">
          {(percentage5) ? (<div>5:  {percentage5.toFixed(2)+"%"}</div>):(<div>0.00%</div>)}
          </li> */}
        </ul>
      </form>
    </div>
  )
}
export default HistoryCard