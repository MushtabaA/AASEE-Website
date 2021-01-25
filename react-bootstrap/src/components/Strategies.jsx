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
            <h1 class="text-center container-sm titlestrat">Strategies</h1>
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
                  <h5 class="mb-4 qs">Some of the Student Programs</h5>
                  <p class="lato pt-0 pb-0 mb-0 mt-0">- Hands-on activities</p>
                  <p class="lato pt-0 pb-0 mb-0 mt-0">
                    - Motivational talks by experts from academia and industry
                  </p>
                  <p class="lato pt-0 pb-0 mb-0 mt-0">
                    - Innovative group projects
                  </p>
                  <p class="lato pt-0 pb-0 mb-0 mt-0">- Group research</p>
                  <p class="lato pt-0 pb-0 mb-0 mt-0">
                    - Tours to universities, research labs, museums, industry,
                    etc.
                  </p>
                  <p class="lato pt-0 pb-0 mb-0 mt-0">- Science fairs</p>
                  <p class="lato pt-0 pb-0 mb-0 mt-0">- Summer schools</p>
                  <h5 class="mb-4 pt-4 qs">
                    Some of the Science Teacher Programs
                  </h5>
                  <p class="lato pt-0 pb-0 mb-0 mt-0">
                    - Workshops and training
                  </p>
                  <p class="lato pt-0 pb-0 mb-0 mt-0">
                    - Hands-on activities for teachers
                  </p>
                  <p class="lato pt-0 pb-0 mb-0 mt-0">- Providing resources</p>
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
                  <h5 class="mb-4 qs">Evaluation</h5>
                  <p class="lato">
                    -Evaluating the success of all activities and programs over
                    a shorter or longer period
                  </p>
                  <h5 class="mb-4 pt-4 qs">Recognition</h5>
                  <p class="lato">
                    Recognizing outstanding performance by students and teachers
                    in multiple ways, including medals, awards, prizes,
                    scholarships, etc.
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
        </div>
      </div>
    );
  }
}
