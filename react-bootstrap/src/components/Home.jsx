import React, { Component } from "react";
import { Jumbotron, Container, Carousel } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div class="bg_home">
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/5.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>AASEE</h3>
                <p>
                The Association for the Advancement of Science and Engineering
              Education (AASEE).
               </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/1.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/4.jpg"
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
          <div class="container-fluid px-2 pb-5 mb-5">
            <h1 class="pt-5 text-center container-sm title">Our Mission</h1>

            <h5
              id="midtitle_home"
              class="pt-5 container-sm midtitle mb-5">
              The Association for the Advancement of Science and Engineering
              Education (AASEE) is dedicated to advancing science and
              engineering education at the K-12 level.
            </h5>
            <h6 id="subtitle_home" class="subtitle px-5 mx-5 mt-5">
              The Association for the Advancement of Science and Engineering
              Education (AASEE) seeks to inspire future science and engineering
              leaders. AASEE gives priority to diverse populations, namely
              Canada’s first nations peoples, girls, and those in financial
              need, as well as rural populations. We are mandated to work across
              the globe, and are implementing an ambitious plan. To do so, AASEE
              designs educational outreach workshops at the K-12 level and
              travels to specific schools and school boards. The lessons the
              volunteers teach are curriculum-relevant, hands-on activities,
              which are meant to engage the student, along with teachers. The
              Association for the Advancement of Science and Engineering
              Education is a registered charity in Canada.
            </h6>
          </div>
        </div>
        <div class="mb-5">
          <h1 class="pt-5 text-center container-sm title">
            Donors, Partners & Friends
          </h1>
          <img
            src="/assets/Capture 1.jpg"
            class="rounded mx-auto d-block center"
            alt=""
            width="60%"
          />
        </div>
      </div>
    );
  }
}
