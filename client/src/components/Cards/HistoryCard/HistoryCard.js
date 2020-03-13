import React, { useState, useEffect } from "react";
import API from '../../../utils/API';
import { ExportToCsv } from 'export-to-csv';
import 'moment-timezone';

function HistoryCard(props) {

 var studentName = "";
 var percentage1 = ""
 var percentage2 = ""
 var percentage3 = ""
 var percentage4 = ""
 var percentage5 = ""
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

 if (data = 1) {
   ones ++;
 }
 else if (data = 2) {
   twos ++
 }
 else if (data = 3) {
   threes ++
 }
 else if (data = 4) {
   fours ++
 }
 else if (data = 5) {
   fives ++
 }

//let onePct = (ones / array.length);
//let twoPct = (twos / array.length);
//let threePct = (threes / array.length);
//let fourPct = (fours / array.length);
//let fivePct = (fives / array.length);

 var data = [
   {
     Student: studentName,
     percentAt1: percentage1,
     percentAt2: percentage2,
     percentAt3: percentage3,
     percentAt4: percentage4,
     percentAt5: percentage5,
   }
 ]
 
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
    console.log(id);
    if(logPlaceholder && logPlaceholder.data){
        setLogs(logPlaceholder.data)
        for(let i = 0; i < logPlaceholder.data.length; i++){
          for (let j = 0; j < logPlaceholder.data[i].scores.length; j++){
            if((logPlaceholder.data[i].scores[j].score > 0) && (logPlaceholder.data[i].scores[j].score <6)){
              scoreTotal =+ logPlaceholder.data[i].scores[j].score
              count++
            }
          }
        }
        setAvgScore(scoreTotal/count);
    }
}
useEffect(() => {
  if(student && student._id) {
    getLogs({id: student._id})
  }
},[])
  return (
    <div className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginLeft: "50px", marginTop: "50px", opacity: ".95" }}>
      <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white" }}>
      {(student && student.name) ? (<div>{student.name.firstName} {student.name.lastName}</div>):(<div>No Name</div>)}
      </div>
      <form>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
          {(avgScore) ? (<div>Average score:  {avgScore}</div>):(<div>No scores available</div>)}
          </li>
          <li className="list-group-item">
            <br />
            <button onClick={exportCSV} style={{ marginTop: "20px", backgroundColor: "darkslategray", color: "white", borderRadius: "6px", border: ".5px solid white" }} id="CSV" type="submit">
            <i class="fas fa-file-export"></i>
            </button>
          </li>
        </ul>
      </form>
    </div>
  )
}
export default HistoryCard