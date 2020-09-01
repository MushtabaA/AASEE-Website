import React, { Component, Fragment } from 'react'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Classroom.css'

export default class Classroom extends Component {
    render() {
        return (
            <Fragment>
            <div>
            <img src="/assets/ClassroomHeader.png" class = "header" alt="ClassroomHeader.png"/>
            <h1 class="pt-5 text-center container-sm title">Classroom Activties </h1>
            <p class="pt-3 pb-5 container-sm subsubt">The lessons and subjects AASEE teaches in the classroom are designed to encourage students to explore and investigate topics that will inspire and ignite their passion for science and engineering. </p>
            <p class="pt-3 pb-5 container-sm subsubt">Based on guidelines outlined in the Alberta Science Curriculum, the activities are framed to nurture each student’s curiosity while ensuring that the concepts are based on items they are familiar with. We encourage science inquiry so that students ask questions, propose ideas, observe, experiment and interpret the findings they have gathered. </p>
            <p class="pt-3 pb-5 container-sm subsubt">AASEE volunteers, which comprise of University of Calgary graduate students and faculty, help guide these students during these hands-on activities. </p>
            </div>
          
            <div class ="container">
                <div class="row">
               {/* Coulmn1 */}
               <div class = "col">
               <div class="Examples">
            <img src="/assets/Buoyancy.jpg" class="sub" alt="" width="200"/>
            <h2 class="pt-3 text-center container-sm subtitle">Having Fun With Buoyancy</h2>
            <p class="pt-2 text-center container-sm subtitle">Grade 2</p>
            </div>
            <div class="Examples">
            <img src="/assets/Sound.jpg" class="sub" alt="" width="200"/>
            <h2 class="pt-3 text-center container-sm subtitle">Can we see sound?</h2>
            <p class="pt-2 text-center container-sm subtitle">Grade 3</p>
            </div>
            <div class="Examples">
            <img src="/assets/Computer.jpg" class="sub" alt="" width="200"/>
            <h2 class="pt-3 text-center container-sm subtitle">How Computers Work</h2>
            <p class="pt-2 text-center container-sm subtitle">Grade 3, 4 & 5</p>
            </div>
            </div>

   {/* Coulmn2 */}
   <div class = "col">
               <div class="Examples">
            <img src="/assets/Light.jpg" class="sub" alt="" width="200"/>
            <h2 class="pt-3 text-center container-sm subtitle">Where Do We Use Light?</h2>
            <p class="pt-2 text-center container-sm subtitle">Grade 4</p>
            </div>
            <div class="Examples">
            <img src="/assets/Struct.jpg" class="sub" alt="" width="200"/>
            <h2 class="pt-3 text-center container-sm subtitle">Structure</h2>
            <p class="pt-2 text-center container-sm subtitle">Grade 4</p>
            </div>
            <div class="Examples">
            <img src="/assets/Light2.jpg" class="sub" alt="" width="200"/>
            <h2 class="pt-3 text-center container-sm subtitle">Having Fun With Light</h2>
            <p class="pt-2 text-center container-sm subtitle">Grade 4</p>
            </div>
            <div class="Examples">
            <img src="/assets/Elec.jpg" class="sub" alt="" width="200"/>
            <h2 class="pt-3 text-center container-sm subtitle">Making Electricity</h2>
            <p class="pt-2 text-center container-sm subtitle">Grade 5</p>
            </div>
               </div>
               
            </div>
          
            </div>

            
            </Fragment>
        )
    }
}
