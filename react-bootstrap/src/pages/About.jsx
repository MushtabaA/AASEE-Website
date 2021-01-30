// ABHAYT CONVERT ALL 20 PAGES TO REACT AND GET PROPER DIRECTORIES
import React, { Component } from "react";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div class="bg_about">
        <div className="backg_about pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 class="pt-5 container-sm subt font-weight-bold">About</h1>
                <p class="pt-3 container-sm subsubt">
                  The Association for the Advancement of Science and Engineering
                  Education (AASEE) is a registered charity in Canada. AASEE is
                  dedicated to advancing science and engineering education at the K-12
                  level. We work directly with students in the classroom. AASEE designs
                  curriculum-based and fun hands-on activities through collaborative
                  research, where we try to ensure a maximum engagement of teachers and
                  parents along with the students. We provide training and resources to
                  pre-university educators. We also create opportunities for the
                  students to learn directly from experts and leaders in the respective
                  fields. AASEE gives priority to diverse populations, namely Canada’s
                  first nations peoples, girls, and those in financial need, as well as
                  rural populations. We are mandated to work across the globe, and are
                  implementing an ambitious plan. The need for AASEE is clear.
                  Enrollment in science and engineering at the higher education level is
                  declining worldwide, and Canada is no exception. AASEE is working to
                  find and address the root cause and to motivate pre-university
                  students toward science and engineering. Girls are underrepresented in
                  science and engineering at the higher education level. In most of the
                  universities and colleges in Canada this number is less than 20
                  percent. There is much unnoticed talent in the rural areas of
                  developing countries, and with proper opportunities these individuals
                  could contribute to advancing science and technology for humanity. At
                  AASEE we target tomorrow´s leaders in science and engineering who will
                  be working with a true passion. We believe advancing science and
                  engineering education is the right way to go, and the right thing to
                  do.
                </p>
              </div>
              <div className="col-md-6 colorLogo">
                <img src="/assets/colorLogo.png" alt="" className="aboutLogo" />
              </div>
            </div>
          </div>
        </div>
        <h4 class="pt-5 container-sm subt font-weight-bold">Vision</h4>
        <p class="pt-3 container-sm subsubt">
          A world where children have passion for science and engineering and an
          equal opportunity to learn in these fields, for the advancement of
          humanity
        </p>

        <h4 class="pt-5 container-sm subt font-weight-bold">Mission</h4>
        <p class="pt-3 container-sm subsubt">
          Advancing science and engineering education among K-12 students
          through motivational activities and resource development
        </p>

        <h4 class="pt-5 container-sm subt font-weight-bold">
          Core Values and Beliefs
        </h4>
        <p class="pt-3 container-sm subsubt">
          <ul class="">
            <li>
              Recognizing that education is a fundamental right for every child
              regardless of social, economic and physiological conditions
            </li>
            <li>
              Creating equitable opportunities for learning science and
              engineering for all children
            </li>
            <li>Developing capacity for all concerned stakeholders</li>
            <li>
              Working with local and international partners and government
              bodies who share AASEE’s vision
            </li>
          </ul>
        </p>

        <h4 class="pt-5 container-sm subt font-weight-bold">
          Fund Development Policy
        </h4>
        <p class="pt-3 container-sm subsubt">
          <ul class="">
            <li>
              Upholds AASEE’s vision and mission in receiving and utilizing
              funds
            </li>
            <li>
              Meticulously complies with and adheres to relevant laws and
              legislation
            </li>
            <li>
              Ensures appropriate recognition of donors and volunteer
              contributions
            </li>
            <li>
              Committed to meeting the codes of ethics and principles of the
              Association of Fundraising Professionals (AFP), Imagine Canada,
              and Donor Bill of Rights
            </li>
          </ul>
        </p>

        <h2 class="pt-5 container-sm subt font-weight-bold">
          Financial Reports
        </h2>
        <p class="pt-3 container-sm subsubt">
          {/* <a href="http://aasee.ca/cms/wp-content/uploads/2017/02/Financial-Statements_AASEE_2013_Signed-1.pdf">
            Financial Report 2013
          </a> */}
          <div class="centered mt-sm-full mt-full pb-5">
            <a
              href="http://aasee.ca/cms/wp-content/uploads/2017/02/Financial-Statements_AASEE_2013_Signed-1.pdf"
              title="Contact for more details"
              class="btnlink"
            >
              Financial Report 2013
          </a>
          </div>
        </p>
      </div>
    );
  }
}
