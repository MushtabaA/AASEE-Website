import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Image, Button, Card, CardDeck, Accordion, Collapse } from "react-bootstrap";
import "./BOD.css";

export default class BOD extends Component {
  render() {
    return (
      <div>
        <div className="headTitle">
          <h1 class="pt-5 pb-5 text-center container-sm title">
            Board of Directors
          </h1>
        </div>
        <div className="vector1">
          <img src="/assets/vector1.png" alt="vector1"/>
        </div>
        <div className="vector2">
          <img src="/assets/vector2.png" alt="vector2"/>
        </div>
        <div className="containerBOD">
          <div className="row">
            <div className="col-md-3">
              <Card style={{ width: "25rem", height: "auto" }}>
                <Card.Img
                  class="img-fluid"
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
            <div className="col-md-3">
              <Card style={{ width: "25rem", height: "auto" }}>
                <Card.Img
                  class="img-fluid"
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
          </div>
          <div className="row">
            <div className="col-md-3">
              <Card style={{ width: "25rem", height: "auto" }}>
                <Card.Img
                  class="img-fluid"
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
            <div className="col-md-3">
              <Card style={{ width: "25rem", height: "auto" }}>
                <Card.Img
                  class="img-fluid"
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
          </div>
        </div>
      </div>
    );
  }
}
