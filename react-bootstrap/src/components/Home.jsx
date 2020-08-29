import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import Slider from './Slider';
import './Home.css';
import Background from './SlideImages/Vector1.jpg';
import Background2 from './SlideImages/Vector2.jpg';

var sectionStyle = {
    width: '100%',
    height: "400px",
    backgroundImage: `url(${Background})`
}
var sectionStyle2 = {
    width: '100%',
    height: "400px",
    backgroundImage: `url(${Background2})`
}

export default class Home extends Component {
    render() {
        return (
            <Fragment>
             
            <Jumbotron fluid > 
</Jumbotron>
<div style={sectionStyle}>
            <h1 class="pt-5 text-center container-sm title">The Association for the Advancement of Science and Engineering Education (AASEE) is dedicated to advancing science 
and engineering education at the K-12 level.</h1>
<h6 class="pt-3 text-center container-sm subtitle">The Association for the Advancement of Science and Engineering Education (AASEE) seeks to inspire future science and engineering leaders.

AASEE gives priority to diverse populations, namely Canada’s first nations peoples, girls, and those in financial need, as well as rural populations. 
We are mandated to work across the globe, and are implementing an ambitious plan. 
To do so, AASEE designs educational outreach workshops at the K-12 level and travels to specific schools and school boards. 
The lessons the volunteers teach are curriculum-relevant, hands-on activities, which are meant to engage the student, along with teachers. 

The Association for the Advancement of Science and Engineering Education is a registered charity in Canada.</h6>
        </div> 
        <div style={sectionStyle2}>
            <h1 class="pt-5 text-center container-sm title">Awards</h1>
            <img src="/assets/Awards Section.jpg" class="sub" alt=""/>
            <a href="/news"><p class="pt-3 text-center container-sm subtitle">---Continue Reading---</p></a> 
        </div>
        <div>
            <h1 class="pt-5 text-center container-sm title">Donors, Partners & Friends</h1>
            <img src="/assets/Capture 1.jpg" alt="" width="1500"/>
            <Slider/>
        </div>

</Fragment>


        )

    }
}

