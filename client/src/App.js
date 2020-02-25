import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "../src/components/pages/Login";
import Footer from "../src/components/Footer";
import AddUser from './components/pages/AddUser';


function App() {
  return (
    <Router>
        <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/adduser" component={AddUser} />
        </div>
    </Router>
   
  );
}

export default App;
