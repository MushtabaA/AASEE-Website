import React, { Component } from "react";
// import "./About.css";

export default class AboutHeader extends Component {
  render() {
    return (
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
    );
  }
}
