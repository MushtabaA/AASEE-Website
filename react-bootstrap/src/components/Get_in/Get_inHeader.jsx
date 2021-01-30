import React, { Component } from "react";
//import "./Get_in.css";

export default class Get_inHeader extends Component {
  render() {
    return (
      <div>
        {/* Get Involved Header Section */}
        <div className="head mb-5 pb-5">
          <div className="d-flex justify-content-center">
            <img
              src="/assets/get_involved_header.png"
              class="header"
              alt="get involved"
            />
          </div>
          <h1 class="pt-5 text-center container-sm title">Get Involved</h1>
          <h5 class="pt-3 mb-5 text-center container-sm subtitle">
            There are many ways to get involved with the AASEE
          </h5>

          <div class="row pt-5 mt-5">
            <div class="col-md-6 mt-5 pl-5">
              <a href="#Volunteer">
                <img
                  src="/assets/volunteer_header.png"
                  class="pb-3 img-fluid rounded-circle center d-block mx-auto clickable"
                  alt="Volunteer with us"
                />
              </a>

              <a style={{ color: "black" }} href="#Volunteer">
                <h3 class="font-weight-bold text-wrap pt-5 mt-1 text-center container-sm lisub ">
                  Volunteer with AASEE
                </h3>
              </a>
            </div>

            <div class="col-md-6 mt-5 pr-5">
              <a href="#Partner">
                <img
                  src="/assets/partner_header.png"
                  class="pb-3 img-fluid rounded-circle center d-block mx-auto clickable"
                  alt="Become Our Partner"
                />
              </a>

              <a style={{ color: "black" }} href="#Partner">
                <h3 class="font-weight-bold text-wrap pt-4 mt-3 text-center container-sm lisub">
                  Become Our Partner
                </h3>
              </a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
