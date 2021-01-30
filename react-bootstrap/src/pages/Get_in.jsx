import React, { Component } from "react";
import "./Get_in.css";
import GetInvolvedHeader from "../components/Get_in/Get_inHeader";
import GetInvolvedVolunteer from "../components/Get_in/Get_inVolunteer";
import GetInvolvedPartner from "../components/Get_in/Get_inPartner";

export default class Get_in extends Component {
  render() {
    return (
      <div>
        <GetInvolvedHeader />

        <GetInvolvedVolunteer />      

        <GetInvolvedPartner />
      </div>
    );
  }
}
