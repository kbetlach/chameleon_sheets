import React from 'react';
import './pages.css';
import Header from "../Header/Header";
import Wrapper from '../Columns/Wrapper.js';
import '../Columns/style.css';

function Main() {
    return (
        <div>
            <Header />
            <div className="main">            
            <Wrapper className="bigWrap" />
            </div>
        </div>
    )
}

export default Main;