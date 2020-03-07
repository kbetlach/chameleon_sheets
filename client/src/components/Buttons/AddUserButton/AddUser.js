import React from "react";

function AddUserButton() {

    return (
<div>
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
Add Users
    </button>
</div>
    )
}

export default AddUserButton