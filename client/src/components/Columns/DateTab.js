import React, {useState} from "react";
import Calendar from 'react-calendar'
import "./style.css"

function DateTab(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd;

    var todayDate = new Date();
    var dd = String(todayDate.getDate()).padStart(2, '0');
    var mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = todayDate.getFullYear();
    todayDate = mm + dd + yyyy;

    const [dateState, setdateState] = useState(todayDate)

    // function handleDateClick(data){
    //     console.log("YESOMG",data)
    // }

    function onChange(date){setdateState({ date })}


    return (
        <div>
        <li className="nav-item date-tab" data-toggle="modal" data-target="#dateModal">
            <a href="#" className="nav-link">
            {today}
            </a>
        </li>
        <div class="modal fade" id="dateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <Calendar onClick={onChange}/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default DateTab