import React from "react";

function HistoryCard() {

  return (
    <div className="card" style={{ width: "18rem", float: "left", border: "1px solid white", marginLeft: "50px", marginTop: "50px", opacity: ".95" }}>
      <div className="card-header" style={{ backgroundColor: "darkslategray", color: "white" }}>
        Student's Full Name
      </div>
      <form>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Average Daily Score
          </li>
          <li className="list-group-item">
            Other Stuff
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