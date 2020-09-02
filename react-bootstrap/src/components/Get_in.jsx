import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Get_in.css";

export default class Get_in extends Component {
  render() {
    return (
      <div>
        {/* Get Involved Header Section */}
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

        {/* Volunteer with AASEE Section */}
        <div className="mt-5 pt-5 mb-5 pb-5"></div>

        <div className="beAVolunteer" id="Volunteer">
          <div>
            <img
              src="/assets/volunteer_header.png"
              class="header w-75 mx-auto d-block"
              alt="volunteer"
            />

            <h1 class="pt-5 text-center container-sm title">Be A Volunteer</h1>
            <h5 class="pt-3 mb-5 text-center container-sm subtitle">
              At AASEE we value you as a volunteer
            </h5>
          </div>
        </div>

        <section
          id="strategic-partner-section"
          className="backg text-muted py-5"
        >
          <div className="container">
            <div className="row pb-5">
              <div className="col-md-6">
                <h5 class="mb-4 qs">Helping in a Classroom</h5>
                <p class="lt">
                  If you love working with kids, you could help us in a
                  classroom. AASEE runs various hands-on fun activities in the
                  classroom.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="/assets/vol1.png"
                  alt="Strategic Partner"
                  className="img-fluid mb-3"
                />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <img
                  src="/assets/vol2.png"
                  alt="Strategic Partner"
                  className="img-fluid mb-3"
                />
              </div>
              <div className="col-md-6">
                <h5 class="mb-4 qs">Guest Speaker</h5>
                <p class="lt">
                  If you would like to share your expertise which would motivate
                  K-12 students towards science and engineering, AASEE will be
                  happy to host you in a classroom as a guest speaker.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="strategic-partner-section" className="text-muted py-5">
          <div className="container">
            <div className="row pb-5">
              <div className="col-md-6">
                <h5 class="mb-4 qs">
                  Showcasing Lab, Industry, Products, etc.{" "}
                </h5>
                <p class="lt">
                  If you are part of an educational institute, industry, museum,
                  or a similar organization, you can showcase your lab, industry
                  production lines, or anything motivational and interesting.
                  AASEE will be happy to arrange such a showcasing event.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="/assets/vol3.png"
                  alt="Strategic Partner"
                  className="img-fluid mb-3"
                />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <img
                  src="/assets/vol4.png"
                  alt="Strategic Partner"
                  className="img-fluid mb-3"
                />
              </div>
              <div className="col-md-6">
                <h5 class="mb-4 qs">Conducting Tours</h5>
                <p class="lt">
                  AASEE is always looking for volunteers to conduct tours. This
                  may include guiding and managing small group of students and
                  carpooling.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="strategic-partner-section"
          className="backg text-muted py-5"
        >
          <div className="container">
            <div className="row pb-5">
              <div className="col-md-6">
                <h5 class="mb-4 qs">Fundraising</h5>
                <p class="lt">
                  If you believe in AASEE’s vision and mission, you could help
                  us raise funds.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="/assets/vol5.png"
                  alt="Strategic Partner"
                  className="img-fluid mb-3"
                />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <img
                  src="/assets/vol6.png"
                  alt="Strategic Partner"
                  className="img-fluid mb-3"
                />
              </div>
              <div className="col-md-6">
                <h5 class="mb-4 qs">Developing programs and activities</h5>
                <p class="lt">
                  You can develop programs and activities for K-12 students.
                  AASEE would love to hear from schoolteachers, particularly
                  math and science teachers at any level.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="partner-end-section" className="text-muted py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 pb-5 mb-1">
                <h5 class="mb-4 qs">Did Not Find Your Preference?</h5>
                <p class="lt">
                  Yes, there are many other ways you could volunteer at AASEE!
                  Please contact us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Become Our Partner Section */}
        <div className="mt-5 pt-5 mb-5 pb-5"></div>
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
                    <a style={{ color: "blue" }} href="/contact">
                      Please contact us.
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Final Div Ending   */}
      </div>
    );
  }
}
