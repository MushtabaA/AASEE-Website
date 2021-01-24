import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Strategies.css";

export default class Strategies extends Component {
  render() {
    return (
      <div>
        <div className="mt-2 pt-2 mb-2 pb-2"></div>
        <div className="beOurPartner" id="Partner">
          <div className="BeOurPartnerHeader">
            <h1 class="text-center container-sm title">Strategies</h1>
          </div>

          <section
            id="strategic-partner-section"
            className="backstrats text-muted py-5"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h5 class="mb-4 qs">Main Objectives</h5>
                  <p class="lato">
                    - Motivating K-12 students toward science and engineering
                    (including focus on math)
                  </p>
                  <p class="lato">
                    - Promoting science and engineering among students by
                    engaging teachers and parents (community) – an integrated
                    approach
                  </p>
                  <p class="lato">
                    - Providing financial support in various forms to enhance
                    AASEE’s mission
                  </p>
                  <p class="lato">
                    - Doing research in science and engineering education along
                    AASEE’s mission
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
                  <h5 class="mb-4 qs">Target Groups</h5>
                  <p class="lato">
                    - K-12, i.e., pre-university level students
                  </p>
                  <p class="lato">- Science and math educators at K-12 level</p>
                  <p class="lato">- Community (parents)</p>
                  <h5 class="mb-4 pt-4 qs">Priority Groups</h5>
                  <p class="lato">
                    Priority will be given to diverse populations, such as,
                    First nations peoples in Canada, girls (promoting women in
                    science and engineering), recent immigrants, schools in
                    small towns and rural areas, and people in financial need
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="strategic-partner-section"
            className="backstrats text-muted py-5"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h5 class="mb-4 qs">Scope of Operations</h5>
                  <p class="lato">
                    Science and engineering education in general with a priority
                    in energy, environment, safety, health, IT, etc. Operating
                    in Alberta and across Canada at a K-12 (pre-university)
                    level including students, teachers, and the community.
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
      </div>
    );
  }
}
