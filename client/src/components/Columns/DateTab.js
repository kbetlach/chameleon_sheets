import React, {useState, useEffect} from "react";
import Calendar from 'react-calendar'
import "./style.css"

function DateTab(props){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd;

    var todayDate = new Date();
    var dd = String(todayDate.getDate()).padStart(2, '0');
    var mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = todayDate.getFullYear();
    todayDate = yyyy + "-" + mm + "-" + dd;

    const [tempDate, setTempDate] = useState(todayDate)
    const [displayedDate, setDisplayedDate] = useState(today)
    const [canUpdate, setCanUpdate] = useState(false)

    function handleDateSelect(e){
        e.preventDefault();
        setTempDate(e.target.value)
        setCanUpdate(true)
    }

    useEffect(()=>{
        let slicedYear = tempDate.slice(0,4)
        let slicedMonth = tempDate.slice(5,7)
        let slicedDay = tempDate.slice(8,10)
        let newConstructedDate = slicedMonth + slicedDay + slicedYear
        if (canUpdate === true) {
            props.setDate(newConstructedDate);
            setDisplayedDate(slicedMonth + "/" + slicedDay)
        }
    },[tempDate])
    



    return (
        <div>
        <li className="nav-item date-tab" data-toggle="modal" data-target="#dateModal">
            <a href="#" className="nav-link">
            {displayedDate}
            </a>
        </li>
        <div class="modal fade" id="dateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Select Date</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form>
                <label for="date"></label>
                <input type="date" id="dateInput" name="dateInput" onChange={handleDateSelect}/>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" >Save changes</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default DateTab