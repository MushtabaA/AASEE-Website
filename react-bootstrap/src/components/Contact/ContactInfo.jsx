import React, { Component } from "react";
//import "./Contact.css";

export default class ContactInfo extends Component {
  render() {
    return (
        <div class="col-md-6 mt-5">
        <h4 className="text-center mb-3 font-weight-bold ">
          Office Location
        </h4>
        <h6 className="text-center  ">Room # ENA 229L</h6>
        <h6 className="text-center   p-2">
          Schulich's School of Engineering
        </h6>
        <h6 className="text-center  ">University of Calgary</h6>

        <h4 className="text-center mt-5 mb-3 font-weight-bold ">
          Follow Us on{" "}
          <a style={{ color: 'blue' }} href="https://www.facebook.com/v2.8/plugins/error/confirm/like?iframe_referer=https%3A%2F%2Faasee.ca%2Fcontact%2F&kid_directed_site=false&secure=true&plugin=like&return_params=%7B%22action%22%3A%22like%22%2C%22app_id%22%3A%221411937785535776%22%2C%22channel%22%3A%22https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df182bb1608a5ae%26domain%3Daasee.ca%26origin%3Dhttps%253A%252F%252Faasee.ca%252Ff29f88cc520711%26relation%3Dparent.parent%22%2C%22container_width%22%3A%22454%22%2C%22href%22%3A%22https%3A%2F%2Fwww.facebook.com%2FAASEE-576623595718823%2F%22%2C%22layout%22%3A%22button_count%22%2C%22locale%22%3A%22en_US%22%2C%22sdk%22%3A%22joey%22%2C%22share%22%3A%22false%22%2C%22show_faces%22%3A%22true%22%2C%22size%22%3A%22small%22%2C%22ret%22%3A%22sentry%22%2C%22act%22%3A%22like%22%7D">
            Facebook
          </a>{" "}
          &{" "}
          <a style={{ color: 'blue' }} href="https://www.linkedin.com/company/aasee-association-for-the-advancement-of-science-and-engineering-education-/">
            LinkedIn
          </a>
        </h4>
      </div>
    );
  }
}


