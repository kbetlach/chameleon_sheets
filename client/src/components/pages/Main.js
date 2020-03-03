import React from 'react';
import '../../assets/css/style.css';
import Header from "../Header";
import Wrapper from '../Columns/Wrapper.js';
import Footer from "../Footer";
import '../Columns/style.css';

function Main() {
    return (
        <div>
            <Header />
            <div className="main">            
            <Wrapper className="bigWrap" />
            </div>
            <Footer />
        </div>
    )
}

export default Main;