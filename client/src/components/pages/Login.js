import React from 'react';
import '../../assets/css/style.css';
import {Link} from "react-router-dom";


function Login() {
    return (
        <div>
            <div className="container w3-container w3-center w3-animate-opacity">
                <div className="jumbotron">
                    <div id="chameleon">
                        CHAMELEON SHEETS
                    </div>
                    <br/>
                    <Link to="/admin"
                        className={
                            window.location.pathname === "/admin"
                    }>
                        <button style={
                            {
                                marginRight: "50px",
                                marginTop: "20px",
                                backgroundColor: "white",
                                color: "darkslategray",
                                borderRadius: "6px",
                                border: ".5px solid white",
                                padding: 5
                            }
                        }>
                            Add User
                        </button>
                    </Link>

                    <button type="button" data-target="#loginModal" data-toggle="modal"
                        style={
                            {
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
                                <div class="modal-header">
                                    <h5 class="modal-title" id="loginModal">Login to Chameleon Sheets:</h5>
                                    <button aria-label="Close" class="close" data-dismiss="modal" type="button">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form id="login">
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label for="emailInput">Email Address</label>
                                            <input class="form-control" id="email-login" placeholder="Email" type="email"></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="passwordInput">Password</label>
                                            <input class="form-control" id="password-login" placeholder="Password" type="password"></input>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
                                        <button class="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;
