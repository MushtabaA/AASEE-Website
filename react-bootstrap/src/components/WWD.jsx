import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'


export default class WWD extends Component {
  render() {
    return (
      <div>
          <Jumbotron fluid >  
</Jumbotron>
        <h1 class="pt-5 text-center container-sm title">What We Do:</h1>
        <h2 class="pt-4 text-left container-sm title">Our Mission</h2>
      <p class="pt-3 text-left container-sm subtitle">
      The need for AASEE is clear. Enrollment in science and engineering at the higher education level is declining worldwide, and Canada is no exception. AASEE is working to find and address the root cause and to motivate pre-university students toward science and engineering. 
Girls are underrepresented in science and engineering at the higher education level. 
In most of the universities and colleges in Canada this number is less than 20 percent. 
      </p>
      <h2 class="pt-4 text-left container-sm title">Our Values</h2>
        <p class="pt-3 text-left container-sm subtitle">
        There is much unnoticed talent in the rural areas of developing countries, and with proper opportunities these individuals could contribute to advancing science and technology for humanity.  
At AASEE we target tomorrow´s leaders in science and engineering who will be working with a true passion. 
We believe advancing science and engineering education is the right way to go, and the right thing to do.
        </p>
      </div>
    );
  }
}

