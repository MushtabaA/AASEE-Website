import React, { Component } from "react";
//import "./Get_in.css";

export default class Get_in extends Component {
  render() {
    return (
        <div>
            
        {/* Volunteer with AASEE Section */}
        <div className = "mt-5 pt-5">

<div className="beAVolunteer" id="Volunteer">
  <div>
    <img
      src="/assets/volunteer_header.png"
      class="header w-75 mx-auto d-block"
      alt="volunteer"
    />

    <h1 class="pt-5 text-center container-sm title">Be A Volunteer</h1>
    <h5 class="pt-3 mb-5 text-center container-sm subtitle">
      At AASEE we value you as a volunteer
    </h5>
  </div>
</div>

<section
  id="strategic-partner-section"
  className="backg text-muted py-5"
>
  <div className="container">
    <div className="row pb-5">
      <div className="col-md-6">
        <h5 class="mb-4 qs">Helping in a Classroom</h5>
        <p class="lt">
          If you love working with kids, you could help us in a
          classroom. AASEE runs various hands-on fun activities in the
          classroom.
        </p>
      </div>
      <div className="col-md-6">
        <img
          src="/assets/vol1.png"
          alt="Strategic Partner"
          className="img-fluid mb-3"
        />
      </div>
    </div>

    <div className="row mt-5">
      <div className="col-md-6">
        <img
          src="/assets/vol2.png"
          alt="Strategic Partner"
          className="img-fluid mb-3"
        />
      </div>
      <div className="col-md-6">
        <h5 class="mb-4 qs">Guest Speaker</h5>
        <p class="lt">
          If you would like to share your expertise which would motivate
          K-12 students towards science and engineering, AASEE will be
          happy to host you in a classroom as a guest speaker.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="strategic-partner-section" className="text-muted py-5">
  <div className="container">
    <div className="row pb-5">
      <div className="col-md-6">
        <h5 class="mb-4 qs">
          Showcasing Lab, Industry, Products, etc.{" "}
        </h5>
        <p class="lt">
          If you are part of an educational institute, industry, museum,
          or a similar organization, you can showcase your lab, industry
          production lines, or anything motivational and interesting.
          AASEE will be happy to arrange such a showcasing event.
        </p>
      </div>
      <div className="col-md-6">
        <img
          src="/assets/vol3.png"
          alt="Strategic Partner"
          className="img-fluid mb-3"
        />
      </div>
    </div>

    <div className="row mt-5">
      <div className="col-md-6">
        <img
          src="/assets/vol4.png"
          alt="Strategic Partner"
          className="img-fluid mb-3"
        />
      </div>
      <div className="col-md-6">
        <h5 class="mb-4 qs">Conducting Tours</h5>
        <p class="lt">
          AASEE is always looking for volunteers to conduct tours. This
          may include guiding and managing small group of students and
          carpooling.
        </p>
      </div>
    </div>
  </div>
</section>

<section
  id="strategic-partner-section"
  className="backg text-muted py-5"
>
  <div className="container">
    <div className="row pb-5">
      <div className="col-md-6">
        <h5 class="mb-4 qs">Fundraising</h5>
        <p class="lt">
          If you believe in AASEE’s vision and mission, you could help
          us raise funds.
        </p>
      </div>
      <div className="col-md-6">
        <img
          src="/assets/vol5.png"
          alt="Strategic Partner"
          className="img-fluid mb-3"
        />
      </div>
    </div>

    <div className="row mt-5">
      <div className="col-md-6">
        <img
          src="/assets/vol6.png"
          alt="Strategic Partner"
          className="img-fluid mb-3"
        />
      </div>
      <div className="col-md-6">
        <h5 class="mb-4 qs">Developing programs and activities</h5>
        <p class="lt">
          You can develop programs and activities for K-12 students.
          AASEE would love to hear from schoolteachers, particularly
          math and science teachers at any level.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="partner-end-section" className="text-muted py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-12 pb-5 mb-1">
        <h5 class="mb-4 qs">Did Not Find Your Preference?</h5>
        <p class="lt">
          Yes, there are many other ways you could volunteer at AASEE!
          Please contact us.
        </p>
      </div>
    </div>
  </div>
</section>
</div>

        </div>
    );
  }
}
