import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "../src/components/pages/Login";
import Main from "../src/components/pages/Main";
import History from "../src/components/pages/History";
import Footer from "../src/components/Footer";
import Admin from './components/pages/Admin';
import Signup from './components/pages/Signup';


function App() {
  return (
    <Router>
        <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/history" component={History} />
        <Route exact path="/signup" component={Signup} />
        </div>
      <Footer />
    </Router>
   
  );
}

export default App;
