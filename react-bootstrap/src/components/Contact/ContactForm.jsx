import React, { Component } from "react";
import {
    Form,
    Row,
    Col,
    Button,
} from "react-bootstrap";
//import "./Contact.css";

export default class ContactForm extends Component {
    render() {
        return (
            <div className="w-100 mx-auto">
          <h3 className="text-center mt-5 mb-3 font-weight-bold">Contact Us</h3>
          <Form>
            <Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First" />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Who would you like to contact?</Form.Label>
                  <Form.Control as="select">
                    <option>Program Coordinator</option>
                    <option>School Programs</option>
                    <option>Partnerships & Donations</option>
                    <option>Donating & Purchasing Textbooks</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <div className="mt-3 mb-5">
              <Button variant="primary" type="submit">
                SEND MESSAGE
            </Button>
            </div>
          </Form>
        </div>
        );
    }
}


