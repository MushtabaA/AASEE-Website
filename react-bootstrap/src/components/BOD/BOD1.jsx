import React, { Component } from "react";
import {
  Button,
  Card,
  Accordion,
} from "react-bootstrap";
//import "./BOD.css";

export default class BOD1 extends Component {
  render() {
    return (
              
        <div className="col-md-3-L col-md-3">
        <Card style={{ width: "25rem", height: "auto" }}>
            <Card.Img
            class="img-fluid img-L"
            variant="top"
            src="/assets/b1.jpg"
            />
            <Card.Body>
            <Card.Title>Jessica Cohen, PhD (Chair)</Card.Title>
            <Accordion defaultActiveKey="0">
                <Card>
                <Card.Header>
                    <Accordion.Toggle
                    as={Button}
                    variant="light"
                    eventKey="1"
                    >
                    Read More!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    Jessica Cohen is the Scholars Academy Coordinator at
                    the University of Calgary and responsible for the
                    First Year Scholars Program. In these roles, she works
                    with high achieving students as they transition from
                    high school to post-secondary, and advises students
                    who are considering graduate and professional school,
                    or major awards and scholarships. She is also
                    Co-Director at SHAD, University of Calgary. Jessica
                    completed her Master’s and Doctorate degree at the
                    University of Oxford (United Kingdom), specializing in
                    educational policy borrowing, and studies in
                    comparative and international education. She also
                    holds Bachelor degrees in arts and education from
                    Queen’s University (Canada) and subsequently taught in
                    Nunavut, France and The Gambia
                </Card.Body>
                </Accordion.Collapse>
                </Card>
            </Accordion>
            </Card.Body>
        </Card>
        </div>
            
    );
  }
}
