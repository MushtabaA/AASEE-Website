import React, { Component} from "react";
import './WWD.css'
export default class WWD extends Component {
  render() {
    return (
      
      <div>
         <section
            id="whatwedo-section"
            className="backstyle"
          >
       <img src="/assets/WhatWeHeader.png" class = "header img-fluid" alt="WhatWeHeader.png"/>
        <h1 class="title">What We Do</h1>
        <h2 id ="subtitle" class="subtitle">Our Mission</h2>   
      <p class="sub">
      The need for AASEE is clear. Enrollment in science and engineering at the higher education level is declining worldwide, and Canada is no exception. AASEE is working to find and address the root cause and to motivate pre-university students toward science and engineering. 
Girls are underrepresented in science and engineering at the higher education level. 
In most of the universities and colleges in Canada this number is less than 20 percent. 
      </p>
       
      </section>
      <img src="/assets/1.jpg" class="whatWeDoImage1">
        </img>
      <h2 id = "subtitle" class="subtitle">Our Values</h2>
        <p class="sub">
        There is much unnoticed talent in the rural areas of developing countries, and with proper opportunities these individuals could contribute to advancing science and technology for humanity.  
At AASEE we target tomorrow´s leaders in science and engineering who will be working with a true passion. 
We believe advancing science and engineering education is the right way to go, and the right thing to do.
        </p>
        <section
            id="whatwedo-section"
            className="backstyle"
          >
        <img src="/assets/4.jpg" class="whatWeDoImage2">
        </img>
        </section>
      </div>
      
    );
    
  }
}

