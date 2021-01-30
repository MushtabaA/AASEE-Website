import React, { Component } from 'react'
//import './Classroom.css'

export default class ClassroomHeader extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <img src="/assets/ClassroomHeader.png" class="header" alt="ClassroomHeader.png" />
                </div>
                <h1 class="pt-5 text-center container-sm title">Classroom Activties </h1>
                <p class="pt-3 pb-lg-5 container-sm subsubt">The lessons and subjects AASEE teaches in the classroom are designed to encourage students to explore and investigate topics that will inspire and ignite their passion for science and engineering.
                Based on guidelines outlined in the Alberta Science Curriculum, the activities are framed to nurture each student’s curiosity while ensuring that the concepts are based on items they are familiar with. We encourage science inquiry so that students ask questions, propose ideas, observe, experiment and interpret the findings they have gathered.
                AASEE volunteers, which comprise of University of Calgary graduate students and faculty, help guide these students during these hands-on activities. </p>
            </div>
        )
    }
}
