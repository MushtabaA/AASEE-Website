import React, { Component } from "react";
//import "./Get_in.css";

export default class Get_inPartner extends Component {
  render() {
    return (
      <div>
        {/* Become Our Partner Section */}
        <div className="beOurPartner" id="Partner">
          <div className="BeOurPartnerHeader">
            <img
              src="/assets/partner_header.png"
              class="header  w-75 mx-auto d-block"
              alt="partner"
            />

            <h1 class="pt-5 text-center container-sm title">Be Our Partner</h1>
            <h5 class="pt-3 mb-5 text-center container-sm subtitle">
              There are many ways for you to partner with AASEE
            </h5>
          </div>

          <section
            id="strategic-partner-section"
            className="backg text-muted py-5"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h5 class="mb-4 qs">Strategic Partner</h5>
                  <p class="lt">
                    If you believe in AASEE’s vision, mission and strategy, you
                    can join us and contribute to AASEE. There are many ways for
                    your to be part of our work
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="/assets/p1.png"
                    alt="Strategic Partner"
                    className="img-fluid mb-3"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="program-partner-section" className="text-muted py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="/assets/p2.png"
                    alt="Strategic Partner"
                    className="img-fluid mb-3"
                  />
                </div>
                <div className="col-md-6">
                  <h5 class="mb-4 qs">Program/Project Partner</h5>
                  <p class="lt">
                    You can jointly design and implement programs and projects
                    with AASEE.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="corporate-partner-section"
            className="backg text-muted py-5"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h5 class="mb-4 qs">Corporate Partner</h5>
                  <p class="mb-4 lt">
                    We welcome corporate sponsorships for local and
                    international programs, projects, and/or events.
                  </p>
                  <img
                    src="/assets/p3.png"
                    alt="Strategic Partner"
                    className="img-fluid mb-3"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="partner-end-section" className="text-muted py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12 pb-5 mb-1">
                  <h5 class="qs">
                    We’ll be happy do discuss further partnership opportunities.
                    <br />
                    <a style={{ color: "blue" }} href="/contact">
                      Please contact us.
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </section>
          </div>

      </div>
    );
  }
}
