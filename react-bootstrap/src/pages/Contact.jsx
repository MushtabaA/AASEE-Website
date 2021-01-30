import React, { Component } from "react";
import "./Contact.css";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactMap from "../components/Contact/ContactMap";
import ContactForm from "../components/Contact/ContactForm";

export default class Contact extends Component {
  render() {
    return (
      <div className="w-75 mx-auto d-block">
        <h1 className="text-center mt-5 mb-3 font-weight-bold">Contact</h1>

        <div class="row pt-5 mt-5">
          <ContactInfo />

          <ContactMap />
          
        </div>

        <ContactForm />
        
      </div>
    );
  }
}