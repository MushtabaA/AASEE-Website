import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import WWD from './pages/WWD';
import Get_in from './pages/Get_in';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Navbar from './pages/Top_Navbar';
import Footer from './pages/Footer';
import News from './pages/News';
import Volunteers from './pages/Volunteers';
import BOD from './pages/BOD';
import Strategies from './pages/Strategies';
import Classroom from './pages/Classroom';



function App() {
  return (
      <div className="page-container">
        <div class="content-wrap">
            <Router>
                
            

        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/what_we_do" component={WWD} />
        <Route exact path="/get_involved" component={Get_in} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/news" component={News} />
        <Route exact path="/volunteers" component={Volunteers} />
        <Route exact path="/BOD" component={BOD} />
        <Route exact path="/Classroom" component={Classroom} />
        <Route exact path="/Strategies" component={Strategies} />

        <Footer/>
    </Router>
    </div>
    </div>
    

  );
}

export default App;
