import React from "react";
import './style.css'

function Submit(){

    function handleBtnSubmit(event){
        event.preventDefault();

    }
    return (
        <button className="btn-primary sub-btn" onClick={handleBtnSubmit} type="submit">Submit</button>
    )
}

export default Submit;