import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <Fragment>
             
            <Jumbotron fluid >
  <Container>
    <h1>Commited to helping students love science and engineering!</h1>
  </Container>  
</Jumbotron>
<div>
            <h1 class="Title">The Association for the Advancement of Science and Engineering Education (AASEE) is dedicated to advancing science 
and engineering education at the K-12 level.</h1>
<h6>The Association for the Advancement of Science and Engineering Education (AASEE) seeks to inspire future science and engineering leaders.

AASEE gives priority to diverse populations, namely Canada’s first nations peoples, girls, and those in financial need, as well as rural populations. 
We are mandated to work across the globe, and are implementing an ambitious plan. 
To do so, AASEE designs educational outreach workshops at the K-12 level and travels to specific schools and school boards. 
The lessons the volunteers teach are curriculum-relevant, hands-on activities, which are meant to engage the student, along with teachers. 

The Association for the Advancement of Science and Engineering Education is a registered charity in Canada.</h6>
        </div> 
        <div>
            <h1>Awards</h1>
            <img src="/assets/Awards Section.jpg" alt=""/>
        </div>
        <div>
            <h1>Donors, Partners & Friends</h1>
            <img src="/assets/Capture 1.jpg" alt="" width="1500"/>
        </div>

</Fragment>


        )

    }
}

