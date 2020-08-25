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
        <h5 class="pt-3 text-center container-sm subtitle">
          There are many ways to get involved with the AASEE
        </h5>
        <div
          class="alert alert-primary text-wrap mt-5 text-center container-sm"
          role="alert"
        >
          Volunteer with AASEE
        </div>

        <img
          src="/assets/volunteer_header.png"
          class="sub"
          alt="Volunteer with us"
        />

        <div
          class="alert alert-primary text-wrap mt-5 text-center container-sm"
          role="alert"
        >
          Become Our Partner
        </div>

        <img
          src="/assets/partner_header.png"
          class="sub"
          alt="Become Our Partner"
        />
      </div>
    );
  }
}