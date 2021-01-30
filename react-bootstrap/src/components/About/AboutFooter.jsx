import React, { Component } from "react";
// import "./About.css";

export default class AboutHeader extends Component {
  render() {
    return (
          <div className="container">
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
