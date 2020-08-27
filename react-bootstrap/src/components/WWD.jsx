import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'


export default class WWD extends Component {
  render() {
    return (
      <div>
          <Jumbotron fluid >
  <Container>
    <h1>What We Do</h1>
  </Container>  
</Jumbotron>
        <img src="/assets/What.jpg" class="sub" alt=""/>
        <h1 class="pt-5 text-center container-sm title">What We Do:</h1>
        <p class="pt-3 text-center container-sm subtitle">
          The need for AASEE is clear. Enrollment in science and engineering at
          the higher education level is declining worldwide, and Canada is no
          exception. AASEE is working to find and address the root cause and to
          motivate pre-university students toward science and engineering. Girls
          are underrepresented in science and engineering at the higher
          education level. In most of the universities and colleges in Canada
          this number is less than 20 percent. There is much unnoticed talent in
          the rural areas of developing countries, and with proper opportunities
          these individuals could contribute to advancing science and technology
          for humanity. At AASEE we target tomorrow´s leaders in science and
          engineering who will be working with a true passion. We believe
          advancing science and engineering education is the right way to go,
          and the right thing to do.
        </p>
        <img src="/assets/Donate.png" class="sub" alt=""/>
        <h1 class="pt-5 text-center container-sm title">DONATIONS HELP KIDS LOVE TO LEARN</h1>
          <p class="pt-3 text-center container-sm subtitle">AASEE is a volunteer organization helping children learn to love science and engineering. Every dollar we raise goes towards bringing innovative lessons to young Albertans.</p>
      <img src="/assets/Donate-now.png" class="sub" alt=""/>
      </div>
    );
  }
}

