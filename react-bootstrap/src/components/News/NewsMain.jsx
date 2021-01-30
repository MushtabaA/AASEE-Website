import React, { Component } from "react";
//import "./News.css";

export default class NewsMain extends Component {
  render() {
    return (
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-8">
              <h1 class="pt-1 ml-0 text-left container-sm bold">
                AASEE on the Road
              </h1>
              <h5 class="pt-0 ml-0 mb-0 text-left container-sm date">
                FEB 15 2017
              </h5>
              <h5 class="pt-0 ml-0 text-left container-sm date">
                By kevinbrennan
              </h5>
              <p class="pt-0 ml-0 pr-0 mr-0 text-left container-sm lato2 left">
                Grande Prairie’s Daily Herald-Tribune recently featured AASEE as it was beginning its trip to visit five schools in the city to promote and spark an interest in the fields of science and engineering. Beginning with the Swanavon School, Dr. Anis Haque, chairman and founder of AASEE, along with graduate students Leanne Dawson and Sarah Bannister from the University of Calgary, will offer a series of workshops from grades 3 to 11 on subjects including buoyancy, electricity, robotic arms, among others.
              </p>
            </div>
            <div className="col-md-4">
              <h3 class="pt-0 ml-0 pb-2 mb-0 text-center container-sm quick">
                Additional Readings
              </h3>
              <h2 class="pt-3 ml-2 mt-0 text-left container-sm nobold">
                Community Initiatives Programs Grant
              </h2>
              <h2 class="pb-0 ml-2 text-left container-sm lato">
                Jan 25 2018 By Jessica Cohen
              </h2>
              <h1 class="pb-1 ml-2 text-left container-sm lato">
                AASEE would like to extend a thank you to the Community
                Initiatives Programs for awarding us with a grant.
              </h1>

              <a href="https://aasee.ca/2018/01/25/community-initiatives-programs-grant/" class="pt-0 pb-2 ml-2 mb-5 text-center container-sm more">
                FIND OUT MORE
              </a>
              <hr class="lines2" />
              <h2 class="pt-2 ml-2 mt-0 text-left container-sm nobold">
                NSERC PromoScience Grant
              </h2>
              <h2 class="pb-0 ml-2 mt-0 text-left container-sm lato">
                Nov 20 2018 By Jessica Cohen
              </h2>
              <h2 class="pb-1 ml-2 mt-0 text-left container-sm lato">
                AASEE has been awarded a 2018 Grant to help expand our
                educational initiatives.
              </h2>
              <a href="https://aasee.ca/2018/11/20/nserc-promoscience-grant/" class="pt-0 ml-2 mb-5 container-sm more">
                FIND OUT MORE
              </a>
            </div>
          </div>
        </div>
    );
  }
}
