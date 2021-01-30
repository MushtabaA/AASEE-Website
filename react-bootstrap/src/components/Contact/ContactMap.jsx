import React, { Component } from "react";
//import "./Contact.css";

export default class ContactMap extends Component {
    render() {
        return (
            <div class="col-md-6 mt-5">
                <div
                    id="map-container-google-1"
                    className="z-depth-1-half map-container"
                    style={{ height: "500px" }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.5304133037266!2d-114.13429539794497!3d51.08021802946683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f0ec17df1a7%3A0x586cb40bc0c95d84!2sSchulich+School+of+Engineering%2C+Calgary%2C+AB+T2N+4V8!5e0!3m2!1sen!2sca!4v1487189550170"
                        frameBorder={0}
                        style={{ border: 0 }}
                        width="100%"
                        height="100%"
                        title="unique"
                        allowFullScreen
                    />
                </div>
            </div>
        );
    }
}


