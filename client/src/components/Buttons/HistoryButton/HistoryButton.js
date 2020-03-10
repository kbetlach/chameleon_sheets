import React from "react";
import {Link} from "react-router-dom";

function HistoryButton() {

    return (
        <div>
            <Link to="/history"
                className={
                    window.location.pathname === "/history"
            }>
                <button type="button"
                    style={
                        {
                            width: "100px",
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
                    History
                </button>
            </Link>
        </div>
    )
}

export default HistoryButton;
