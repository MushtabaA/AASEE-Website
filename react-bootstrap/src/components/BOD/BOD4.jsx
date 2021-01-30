import React, { Component } from "react";
import {
    Button,
    Card,
    Accordion,
} from "react-bootstrap";
//import "./BOD.css";

export default class BOD4 extends Component {
    render() {
        return (
            <div className="col-md-3-L col-md-3">
                <Card style={{ width: "25rem", height: "auto" }}>
                  <Card.Img
                    class="img-fluid img-L"
                    variant="top"
                    src="/assets/b4.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Denny Huynh, BEng</Card.Title>
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
                            Denny Huynh is an electrical engineer working at a
                            company specializing in magnetic levitation systems
                            for over 5 years. He received his Bachelor’s Degree in
                            Electrical Engineering and specializing in Energy and
                            Environment from the University of Calgary. Denny
                            Huynh has previously volunteered with AASEE prior to
                            becoming a member of the board.
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



