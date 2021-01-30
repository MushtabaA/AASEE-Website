// ABHAYT CONVERT ALL 20 PAGES TO REACT AND GET PROPER DIRECTORIES
import React, { Component } from "react";
import AboutHeader from "../components/About/AboutHeader";
import AboutMain from "../components/About/AboutMain";
import AboutFooter from "../components/About/AboutFooter";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div class="bg_about">
        
        <AboutHeader />

        <AboutMain />   

        <AboutFooter />

        
      </div>
    );
  }
}
