import React, { useState, useEffect } from "react";
import './pages.css';
import Header from "../Header/Header";
import HistoryCard from '../Cards/HistoryCard/HistoryCard';
import API from '../../utils/API';

function History() {
    const [user, setUser] = useState();
    async function checkYourself(){
        let userPlaceholder = await API.getSelf();
        if(userPlaceholder){
            setUser(userPlaceholder.data)
        }
    }
    useEffect(() => {
        checkYourself();
      },[])
    return (
    <div>
        {(user) ? (
        <div>
        <Header />
        <div className="container container w3-container w3-center w3-animate-opacity" style={{ margin: "auto", width: "75%" }}>
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
        </div>
        </div>) : (<div className="jumbotron">
                <h1 className="text-center" style={{color: "white", fontSize: "42px", marginBottom: "25px"}}>You must be logged in to view this page</h1>
                </div>)}
     </div>
    )
}

export default History;