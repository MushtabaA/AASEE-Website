import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import WWD from './components/WWD';
import Get_in from './components/Get_in';
import About from './components/About';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Navbar from './components/Top_Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/what_we_do" component={WWD} />
        <Route exact path="/get_involved" component={Get_in} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/donate" component={Donate} />
      </div>
    </Router>
  );
}

export default App;
