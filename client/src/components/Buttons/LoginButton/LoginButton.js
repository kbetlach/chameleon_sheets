import React, { useState } from "react";
import API from '../../../utils/API';

function LoginButton() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("here");
        API.login({
            email: email,
            password: password
          })
         .then(console.log("logged in"))
         .catch(function(err){
              console.log(err)
          })
    }

    return (
<div>
<button type="button" data-target="#loginModal" data-toggle="modal"
style={
    {
        width: "150px",
        height: "50px",
        fontSize: "24px",
        marginTop: "20px",
        backgroundColor: "white",
        color: "darkslategray",
        borderRadius: "6px",
        border: ".5px solid white",
        padding: 5
    }
}>
Login
</button>

<div aria-hidden="true" aria-labelledby="loginModalLabel" id="loginModal" role="dialog" tabindex="-1">

<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header" style = {{backgroundColor: "darkslategray"}}>
            <h5 style = {{color: 'white'}} class="modal-title" id="loginModal">Login to Chameleon Sheets:</h5>
            <button style = {{color: 'white'}} aria-label="Close" class="close" data-dismiss="modal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <form id="login" onSubmit={handleSubmit}>
            <div class="modal-body">
                <div class="form-group" style={{textAlign: "left", fontSize: "20px"}}>
                    <label for="emailInput">Email Address</label>
                    <input onChange={e => setEmail(e.target.value)} class="form-control" id="email-login" placeholder="Email" type="email"></input>
                </div>
                <div class="form-group" style={{textAlign: "left", fontSize: "20px"}}>
                    <label for="passwordInput">Password</label>
                    <input onChange={e => setPassword(e.target.value)}class="form-control" id="password-login" placeholder="Password" type="password"></input>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
                <button style = {{color: 'white', backgroundColor: "darkslategray", border: '.5 px solid white'}} class = "btn" type="submit">Submit</button>
            </div>
        </form>
    </div>
</div>
</div>
</div>
    )
}

export default LoginButton