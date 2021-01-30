import React, { Component } from 'react';
import './Classroom.css';
import ClassroomHeader from "../components/Classroom/ClassroomHeader";
import ClassroomImages from "../components/Classroom/ClassroomImages";

export default class Classroom extends Component {
    render() {
        return (
            <div>
                <ClassroomHeader />

                <ClassroomImages />


            </div>
        )
    }
}
