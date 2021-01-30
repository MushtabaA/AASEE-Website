import React, { Component } from "react";
//import "./News.css";

export default class NewsHeader extends Component {
  render() {
    return (
        <div>
        {/* <h1 class="pt-5 text-center container-sm title">News</h1> */}
        <div class="image">
        <div className="d-flex justify-content-center">
            <img
            src="/assets/news_header.png"
            class="header img-fluid"
            alt="news_header.png"
            />
            </div>
            <div class="text">
            <h3 class="newstext">News</h3>
            </div>
        </div>

        <img
            src="/assets/global.png"
            class="global p-4 rounded mx-auto d-block img-fluid"
            alt="global.png"
        />
        <hr class="lines" />

        {/* <div class="container my-container">
                 <div class="row justify-content-between my-row">
                     <div className="col-md-6 my-col">
                     <h1 class="pt-1 ml-2 text-left container-sm title">AASEE on the Road</h1>
                     </div>
                     <div className="col-md-6 my-col">
                     <h3 class="pt-0 ml- text-center container-sm subtitle">Additional Readings</h3>
                     </div>
                 </div>

                 <div class="row justify-content-between my-row">
                     <div className="col-md-6 my-col">
                     <h5 class="pt-0 ml-2 mb-0 text-left container-sm subtitle">
                          FEB 15 2017
                      </h5>
                 </div>
                     <div className="col-md-6 my-col">
                         <h3 class="pt-0 ml-0 text-left container-sm subtitle">Community Initiatives Programs Grant
                         </h3>
                     </div>
                 </div>
                 <div className="row my-row">
                     <div className="col-md-6 my-col">
                 <h5 class="pt-0 ml-2 text-left container-sm subtitle">
                         By kevinbrennan
                         </h5>
                     </div>
                     <div className="col-md-6 my-col">
                         <h3 class="pt-1 ml-2 text-left container-sm subtitle">Jan 25 2018 By Jessica Cohen
                         </h3>
                     </div>
                    
                 </div>
                     <div className="row my-row">
                         <div className="col-md-6 my-col">
                         <h5 class="pt-0 ml-2 text-left container-sm subtitle">
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores amet ad obcaecati vitae labore, dolore quibusdam ea doloribus qui sequi itaque. Atque officiis nam mollitia harum esse alias reiciendis.
                     </h5>
                     </div>
                     {/* <div className="col my-col"> <p class="pt-0 ml-2 text-left container-sm subtitle"> placeholder text </p></div> */}

        {/* <div className="col-md-6 my-col">
                         <p class="text-left container-sm ">AASEE would like to extend a thank you to the Community Initiatives Programs for awarding us with a grant.

                         </p>
                         <h5 class="pt-0 ml-2 text-center container-sm subtitle">
                         READ MORE
                     </h5>
                     </div>
                     </div>
                       <div className="row my-row">
                         <div className="col"></div>
                         <div className="col align-top my-col">
                         <h5 class="pt-0 ml-2 text-center container-sm subtitle">
                         READ MORE
                     </h5>
                    </div>
                     </div>   */}

        {/* </div> } */}

        </div>
    );
  }
}
