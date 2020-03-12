import React from "react";
import {Link} from "react-router-dom";

function AddUserButton() {

    return (
        <div>
            <Link to="/admin"
                className={
                    window.location.pathname === "/admin"
            }>
                <button type="button"
                    style={
                        {
                            width: "100px",
                            height: "50px",
                            fontSize: "24px",
                            backgroundColor: "white",
                            color: "darkslategray",
                            borderRadius: "6px",
                            border: ".5px solid white",
                            padding: 5
                        }
                }>
                    Add Users
                </button>
            </Link>
        </div>
    )
}

export default AddUserButton;
