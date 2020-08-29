import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Get_in.css";

export default class Get_in extends Component {
  render() {
    return (
      <div>
        <img
          src="/assets/get_involved_header.png"
          class="header"
          alt="get involved"
        />

        <h1 class="pt-5 text-center container-sm title">Get Involved</h1>
        <h5 class="pt-3 pb-5 text-center container-sm subtitle">
          There are many ways to get involved with the AASEE
        </h5>

        <div class="row pt-5">
          <div class="col-md-6">
            <img
              src="/assets/volunteer_header.png"
              class="pb-3 img-fluid rounded-circle center d-block mx-auto"
              alt="Volunteer with us"
            />

            <div class="text-wrap pt-3 text-center container-sm">
              Volunteer with AASEE
            </div>
          </div>

          <div class="col-md-6">
            <img
              src="/assets/partner_header.png"
              class="pb-3 img-fluid rounded-circle center d-block mx-auto"
              alt="Become Our Partner"
            />

            <div class="text-wrap pt-3 text-center container-sm">
              Become Our Partner
            </div>
          </div>
        </div>
      </div>
    );
  }
}
