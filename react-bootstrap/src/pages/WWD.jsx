import React, { Component} from "react";
import './WWD.css'
export default class WWD extends Component {
  render() {
    return (
      
      <div>
        <div className="vector1">
            <img src="/assets/vector1.png" alt="vector1" />
          </div>
        <div className="d-flex justify-content-center">
       <img src="/assets/WhatWeHeader.png" class = "header img-fluid" alt="WhatWeHeader.png"/>
       </div>
        <h1 class="titleWWD">What We Do</h1>
        <h2 id ="subtitle" class="subtitle">Our Mission</h2>   
      <p class="subWWD">
      The need for AASEE is clear. Enrollment in science and engineering at the higher education level is declining worldwide, and Canada is no exception. AASEE is working to find and address the root cause and to motivate pre-university students toward science and engineering. 
Girls are underrepresented in science and engineering at the higher education level. 
In most of the universities and colleges in Canada this number is less than 20 percent. 
      </p>
      <h2 id = "subtitle" class="subtitle">Our Values</h2>
        <p class="subWWD">
        There is much unnoticed talent in the rural areas of developing countries, and with proper opportunities these individuals could contribute to advancing science and technology for humanity.  
At AASEE we target tomorrow´s leaders in science and engineering who will be working with a true passion. 
We believe advancing science and engineering education is the right way to go, and the right thing to do.
        </p>
      </div>
      
    );
    
  }
}

