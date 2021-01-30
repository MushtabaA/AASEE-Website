import React, { Component } from "react";
import "./Home.css";
import HomeHeader from "../components/Home/HomeHeader";
import HomeMission from "../components/Home/HomeMission";
import HomeDonors from "../components/Home/HomeDonors";

export default class Home extends Component {
  render() {
    return (
      <div class="bg_home">

          <HomeHeader />

          <HomeMission />
        
          <HomeDonors />

      </div>
    );
  }
}
