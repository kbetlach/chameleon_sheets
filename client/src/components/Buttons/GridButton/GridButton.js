import React from "react";
import {Link} from "react-router-dom";

function GridButton() {

    return (
        <div>
            <Link to="/main"
                className={
                    window.location.pathname === "/main"
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
                    Data
                </button>
            </Link>
        </div>
    )
}

export default GridButton;
