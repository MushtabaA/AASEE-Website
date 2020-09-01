// import React, { Component } from 'react'

// export default class Contact extends Component {
//     render() {
//         return (
//             <div>
//                 Contact
//             </div>
//         )
//     }
// }

import React, { Component } from "react";
import {
  Form,
  FormControl,
  Row,
  Col,
  FormGroup,
  FormLabel,
  Button,
  iframe,
  embed,
  ResponsiveEmbed,
  ResponsiveEmbedProps,
} from "react-bootstrap";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="w-75 mx-auto d-block">
        <h1 className="text-center mt-5 mb-3 font-weight-bold">Contact</h1>

        <div class="row pt-5 mt-5">
          <div class="col-md-6 mt-5">
            <h4 className="text-center mb-3 font-weight-bold ">
              Office Location
            </h4>
            <h6 className="text-center  ">Room # ENA 229L</h6>
            <h6 className="text-center   p-2">
              Schulich School of Engineering
            </h6>
            <h6 className="text-center  ">University of Calgary</h6>

            <h4 className="text-center mt-5 mb-3 font-weight-bold ">
              Follow Us on{" "}
              <a href="https://www.facebook.com/v2.8/plugins/error/confirm/like?iframe_referer=https%3A%2F%2Faasee.ca%2Fcontact%2F&kid_directed_site=false&secure=true&plugin=like&return_params=%7B%22action%22%3A%22like%22%2C%22app_id%22%3A%221411937785535776%22%2C%22channel%22%3A%22https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df182bb1608a5ae%26domain%3Daasee.ca%26origin%3Dhttps%253A%252F%252Faasee.ca%252Ff29f88cc520711%26relation%3Dparent.parent%22%2C%22container_width%22%3A%22454%22%2C%22href%22%3A%22https%3A%2F%2Fwww.facebook.com%2FAASEE-576623595718823%2F%22%2C%22layout%22%3A%22button_count%22%2C%22locale%22%3A%22en_US%22%2C%22sdk%22%3A%22joey%22%2C%22share%22%3A%22false%22%2C%22show_faces%22%3A%22true%22%2C%22size%22%3A%22small%22%2C%22ret%22%3A%22sentry%22%2C%22act%22%3A%22like%22%7D">
                Facebook
              </a>{" "}
              &{" "}
              <a href="https://www.linkedin.com/company/aasee-association-for-the-advancement-of-science-and-engineering-education-/">
                LinkedIn
              </a>
            </h4>
          </div>

          <div class="col-md-6 mt-5">
            <div
              id="map-container-google-1"
              className="z-depth-1-half map-container"
              style={{ height: "500px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.5304133037266!2d-114.13429539794497!3d51.08021802946683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f0ec17df1a7%3A0x586cb40bc0c95d84!2sSchulich+School+of+Engineering%2C+Calgary%2C+AB+T2N+4V8!5e0!3m2!1sen!2sca!4v1487189550170"
                frameBorder={0}
                style={{ border: 0 }}
                width="100%"
                height="100%"
                allowFullScreen
              />
            </div>
          </div>
        </div>

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
fff
