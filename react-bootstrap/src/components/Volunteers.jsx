import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Volunteers.css";

export default class Volunteers extends Component {
  render() {
    return (
      <div>
        <div className="headTitle">
          <h1 class="pt-5 text-center container-sm title">Volunteers</h1>
        </div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/v1.jpg" alt="volun1" />
            </div>
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/v2.jpg" alt="volun2" />
            </div>
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/v3.jpg" alt="volun3" />
            </div>
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/v4.jpeg" alt="volun4" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row  mb-5">
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/v5.png" alt="volun5" />
            </div>
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/v6.jpg" alt="volun6" />
            </div>
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/v7.jpg" alt="volun7" />
            </div>
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/v8.jpg" alt="volun8" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row  mb-5">
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/vn.jpg" alt="volun9" />
            </div>
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/vn.jpg" alt="volun10" />
            </div>
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/vn.jpg" alt="volun11" />
            </div>
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/vn.jpg" alt="volun12" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row  mb-5">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/vn.jpg" alt="volun13" />
            </div>
            <div className="col-md-3">
              <img class="img-fluid" src="/assets/vn.jpg" alt="volun14" />
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>

        <div class="centered mt-sm-full mt-full pb-5">
          <a
            href="mailto:aaseewebsite@mail.com"
            title="Contact for more details"
            class="btnlink"
          >
            Click To Volunteer!
          </a>
        </div>
      </div>
    );
  }
}
