import React from 'react';
import '../../assets/css/style.css';
import Header from "../Header";
import StudentTabs from "../StudentTabs";
import Wrapper from '../Columns/Wrapper.js';
import Footer from "../Footer";
import '../Columns/style.css';

function Main() {
    return (
        <div>
            <Header />
            <div className="main">            
            <StudentTabs />
            <Wrapper className="bigWrap" />
            </div>
            <Footer />
        </div>
    )
}

export default Main;