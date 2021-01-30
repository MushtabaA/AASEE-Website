import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
//import "./Home.css";

export default class HomeHeader extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center">
          <Carousel>
            <Carousel.Item> 
            <div className="d-flex justify-content-center">
              <img
                className="carouselImage"
                src="/assets/5.jpg"
                alt="First slide"
              />
              </div>
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
              className="carouselImage"
                src="/assets/2.jpg"
                alt="Second slide"
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
               className="carouselImage"
                src="/assets/3.jpg"
                alt="Third slide"
              />
               <Carousel.Caption>
                <h3>AASEE</h3>
                <p>
                  The Association for the Advancement of Science and Engineering
                  Education (AASEE).
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

    );
  }
}
