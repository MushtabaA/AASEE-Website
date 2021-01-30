import React, { Component } from "react";
import "./BOD.css";
import JessicaCohen from "../components/BOD/BOD1";
import AnisHaque from "../components/BOD/BOD2";
import PlashBagchi from "../components/BOD/BOD3";
import DennyHuynh from "../components/BOD/BOD4";

export default class BOD extends Component {
  render() {
    return (
      <div>
        <div class="bg">
          <div className="headTitle">
            <h1 class="pt-5 pb-5 text-center container-sm title">
              Board of Directors
          </h1>
          </div>

          <div className="container">

            <div className="row mr-3">

              <JessicaCohen />
              <AnisHaque />
              
            </div>

            <div className="row">

              <PlashBagchi />
              <DennyHuynh />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
