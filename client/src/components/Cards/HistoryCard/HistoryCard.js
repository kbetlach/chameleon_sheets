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

// const [percentage1, setPercentage1] = useState(0);
// const [percentage2, setPercentage2] = useState(0);
// const [percentage3, setPercentage3] = useState(0);
// const [percentage4, setPercentage4] = useState(0);
// const [percentage5, setPercentage5] = useState(0);

  const [logs, setLogs] = useState();
  // const [avgScore, setAvgScore] = useState(0);
  const [dataArray, setDataArray] = useState([]);

  let scoreTotal;
  let count;
  let avgScore;
  let percentage1;
  let percentage2;
  let percentage3;
  let percentage4;
  let percentage5;
  let student=props.value;
  async function getLogs(id){
    scoreTotal = 0;
    count = 0;
    let logPlaceholder = await API.getLogs(id);
    if(logPlaceholder && logPlaceholder.data){
    setLogs(logPlaceholder.data)

    var IndexedArray = function(key) {
      this.key = key || 'id';
      this.data = [];
      this.index = {};
    };
    
    IndexedArray.prototype.addOrReplace = function(object) {
      var id = object[this.key],
          index = this.index[id];
      
      if(index === undefined) {
          index = this.data.length;
          this.index[id] = index;
      }
      this.data[index] = object;
    };
    
    var indexedArray = new IndexedArray('date');
    for (var i = 0; i < logPlaceholder.data.length; i++){
      console.log("CHECK THIS", i, logPlaceholder.data[i]);
        for (let j = 0; j < logPlaceholder.data[i].scores.length; j++){
          if((logPlaceholder.data[i].scores[j].score > 0) && (logPlaceholder.data[i].scores[j].score <6)){
            scoreTotal += logPlaceholder.data[i].scores[j].score;
            count++;
            avgScore = (scoreTotal/count)
            // setAvgScore((scoreTotal/count));
            if(logPlaceholder.data[i].scores[j].score === 1){ ones++; }
            else if(logPlaceholder.data[i].scores[j].score === 2){ twos++; }
            else if(logPlaceholder.data[i].scores[j].score === 3){ threes++; }
            else if(logPlaceholder.data[i].scores[j].score === 4){ fours++; }
            else if(logPlaceholder.data[i].scores[j].score === 5){ fives++; }
            percentage1 = ((ones/count)*100); 
            percentage2 = ((twos/count)*100); 
            percentage3 = ((threes/count)*100); 
            percentage4 = ((fours/count)*100); 
            percentage5 = ((fives/count)*100); 
            console.log("SCR TTL",scoreTotal);
            console.log("COUNT",count);
            console.log("AVG SCR",avgScore);
          }
      }
      indexedArray.addOrReplace({
        Student: student.name.firstName + " " + student.name.lastName, 
        date: logPlaceholder.data[i].date, 
        percentAt1: percentage1.toFixed(2),
        percentAt2: percentage2.toFixed(2),
        percentAt3: percentage3.toFixed(2),
        percentAt4: percentage4.toFixed(2),
        percentAt5: percentage5.toFixed(2),
        dailyAvg: avgScore
      });
      count = 0;
      scoreTotal = 0;
      avgScore = 0;
      ones = 0;
      twos = 0;
      threes = 0;
      fours = 0;
      fives = 0;
      percentage1 = 0;
      percentage2 = 0;
      percentage3 = 0;
      percentage4 = 0;
      percentage5 = 0;
      // setAvgScore(0);
      // setPercentage1(0);
      // setPercentage2(0);
      // setPercentage3(0);
      // setPercentage4(0);
      // setPercentage5(0);
    }
    for (var q = 0; q < indexedArray.data.length; q++){
      // dataArray.push(indexedArray.data[q])
      setDataArray(dataArray => [...dataArray, indexedArray.data[q]])
      // console.log(dataArray);
    }
  }
    // console.log("INDEXXXXEEEDDD: ", indexedArray.data);
    
}
useEffect(()=>{
  console.log("USEFX", dataArray)
},[dataArray])

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
  csvExporter.generateCsv(dataArray);
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
          {dataArray.map((data) => (
          <li className="list-group-item">
            <div className="row">
              <div className="col-md-3 text-left">{data.date.slice(0,4)}</div>
              <div className="col-md-7 text-left">{(data.dailyAvg) ? (<div>Average score:  {data.dailyAvg.toFixed(2)}</div>):(<div>No scores available</div>)}</div>
              <div className="col-md-2"><button onClick={exportCSV} style={{backgroundColor: "darkslategray", color: "white", borderRadius: "6px", border: ".5px solid white" }} id="CSV" type="submit">
              <i class="fas fa-file-export"></i></button>
            </div>
          </div>
          </li>
          ))}
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