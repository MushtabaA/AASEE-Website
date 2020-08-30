import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Get_in.css";

export default class Get_in extends Component {
  render() {
    return (
      <div>
        <div className="head">
          <img
            src="/assets/get_involved_header.png"
            class="header"
            alt="get involved"
          />

          <h1 class="pt-5 text-center container-sm title">Get Involved</h1>
          <h5 class="pt-3 mb-5 text-center container-sm subtitle">
            There are many ways to get involved with the AASEE
          </h5>

          <div class="row pt-5 mt-5">
            <div class="col-md-6 mt-5 pl-5">
              <img
                src="/assets/volunteer_header.png"
                class="pb-3 img-fluid rounded-circle center d-block mx-auto"
                alt="Volunteer with us"
              />

              <h3 class="font-weight-bold text-wrap pt-5 mt-1 text-center container-sm lisub">
                Volunteer with AASEE
              </h3>
            </div>

            <div class="col-md-6 mt-5 pr-5">
              <img
                src="/assets/partner_header.png"
                class="pb-3 img-fluid rounded-circle center d-block mx-auto"
                alt="Become Our Partner"
              />

              <h3 class="font-weight-bold text-wrap pt-4 mt-3 text-center container-sm lisub">
                Become Our Partner
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
