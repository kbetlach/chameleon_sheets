import React, { useState, useEffect } from "react";
import './pages.css';
import API from '../../utils/API';
import { Redirect } from "react-router-dom";
import AddUserButton from "../Buttons/AddUserButton/AddUser"
import GridButton from "../Buttons/GridButton/GridButton"
import HistoryButton from "../Buttons/HistoryButton/HistoryButton"
import ViewAllUsersButton from "../Buttons/ViewAllUsersButton/ViewAllUsersButton"

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useState();
    const [isAdmin, setIsAdmin] = useState();
    let freshLog = false
    async function checkYourself(){
        let userPlaceholder = await API.getSelf();
        if(userPlaceholder && (userPlaceholder.data.role === "Admin")){
            setIsAdmin(true)
        }
        else{
            setIsAdmin(false)
        }
        setUser(userPlaceholder.data);
        if(userPlaceholder && freshLog){
                window.location.reload(false);
            }
    }
    useEffect(() => {
        checkYourself();
      },[])
    const handleSubmit = async e => {
        e.preventDefault();
        freshLog=true
        await API.login({
            email: email,
            password: password
        })
        setTimeout(checkYourself(), 500)
    }
    return (
        <div>
            <div className="container w3-container w3-center w3-animate-opacity">
                <div className="jumbotron">
                    <div id="chameleon">
                        CHAMELEON SHEETS
                    </div>
                    <br/>
                    {(user && user.role) ?(<div> {(isAdmin) ? (
                    <div className="row">
                        <div className="col-md-3">
                            <AddUserButton />
                        </div>
                        <div className="col-md-3">
                            <ViewAllUsersButton />
                        </div>
                        <div className="col-md-3">
                            <GridButton />
                        </div>
                        <div className="col-md-3">
                            <HistoryButton />
                        </div>
                    </div>
                    ) : (
                    <div className="row">
                        <div className="col-md-6">
                            <GridButton />
                        </div>
                        <div className="col-md-6">
                            <HistoryButton />
                        </div>
                    </div>
                    )} </div>) :(
                    <div><button type="button" data-target="#loginModal" data-toggle="modal"
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
                    <div aria-hidden="true" aria-labelledby="loginModalLabel" class="modal fade" id="loginModal" role="dialog" tabindex="-1">
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
                    </div>)}
                    
                </div>
            </div>
        </div>
    )
}
export default Login;