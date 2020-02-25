import React from "react";

function GuardianCard() {
  return (
    <div class="card" style={{width: "18rem", float: "left", border: "1px solid white", marginLeft: "50px", marginTop: "50px", opacity: ".95"}}>
      <div class="card-header" style={{backgroundColor: "darkslategray", color: "white"}}>
      Add Guardian
      </div>
    <form type= "submit">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <input placeholder= "First Name">
            </input>
          </li>
          <li class="list-group-item">
            <input placeholder= "Last Name">
            </input>
          </li>
        <li class="list-group-item">
            <input placeholder = "Email" type= "email">
            </input> 
              <br />
            <input style={{marginTop: "20px", backgroundColor: "darkslategray", color: "white", borderRadius: "6px", border: ".5px solid white"}}type="submit"></input>
        </li>
      </ul>
    </form>
  </div>
  )
}
export default GuardianCard