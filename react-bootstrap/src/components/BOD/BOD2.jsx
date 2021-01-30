import React, { Component } from "react";
import {
    Button,
    Card,
    Accordion,
} from "react-bootstrap";
//import "./BOD.css";

export default class BOD2 extends Component {
    render() {
        return (
            <div className="col-md-3-L col-md-3">
                <Card style={{ width: "25rem", height: "auto" }}>
                  <Card.Img
                    class="img-fluid img-L"
                    variant="top"
                    src="/assets/b2.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Anis Haque, PhD, PEng</Card.Title>
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
                            Anis Haque has twenty years of university teaching
                            experience in science and engineering. Having a true
                            passion for teaching, Anis has made time to work with
                            pre-university students to help them LOVE science and
                            engineering. He became involved with the IEEE’s
                            educational outreach program TISP in Canada and is
                            currently the Chair of TISP Canada. A visionary
                            founder of AASEE, Anis is also a Director on the Board
                            of Minerva Canada, a not-for-profit organization
                            promoting health and safety education for business and
                            engineering students at universities across Canada.
                            Anis is a full-time faculty with the Department of
                            Electrical and Computer Engineering at the University
                            of Calgary. He also holds a position as Associate
                            Director of Students in that department. His primary
                            research interests are naotechnology, renewable energy
                            and engineering education. Anis received his PhD
                            degree from Japan Advanced Institute of Science and
                            Technology (JAIST) in Japan. He completed his master’s
                            degrees in Computer Science at the University of
                            Cambridge, England and in Applied Physics and
                            Electronics at the University of Rajshahi, Bangladesh.
                            www.ucalgary.ca/~anis
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
