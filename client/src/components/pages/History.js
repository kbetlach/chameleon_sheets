import React from 'react';
import './pages.css';
import Header from "../Header/Header";
import HistoryCard from '../Cards/HistoryCard/HistoryCard';

function History() {
    return (
    <div>
        <Header />
        <div className="container container w3-container w3-center w3-animate-opacity" style={{ margin: "auto", width: "75%" }}>
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
        </div>
     </div>
    )
}

export default History;