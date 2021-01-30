import React, { Component } from "react";
import {
    Button,
    Card,
    Accordion,
} from "react-bootstrap";
//import "./BOD.css";

export default class BOD3 extends Component {
    render() {
        return (
            <div className="col-md-3-L col-md-3">
                <Card style={{ width: "25rem", height: "auto" }}>
                  <Card.Img
                    class="img-fluid img-L"
                    variant="top"
                    src="/assets/b3.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Palash Bagchi, MBA, MSS</Card.Title>
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
                            Palash Bagchi is a co-founder of AASEE. He has more
                            than twenty years of experience as an international
                            development professional and expert in non-profit
                            management and fund development. Palash is currently
                            managing the fund development department at CAWST (The
                            Centre for Affordable Water and Sanitation
                            Technology). Prior to this, he enjoyed a very
                            successful seventeen-year career in international
                            development including education. He held executive
                            positions and served on the boards of both profit and
                            no-profit organizations. He has been involved in a
                            variety of advisory roles on issues such as education,
                            gender development, and economic emancipation to
                            governmental agencies, academic institutions, and
                            civil society groups. Palash has worked in several
                            countries in Asia, Africa, and the Caribbean with
                            underprivileged groups and communities. Palash holds
                            an MBA from the University of Liverpool, and a Masters
                            in Development Economics from the University of
                            Rajshahi. With his background, Palash brings a rare
                            perspective on the relationship between science and
                            engineering education and international development in
                            the non-profit sector
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
