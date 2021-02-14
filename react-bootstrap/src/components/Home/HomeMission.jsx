import React, { Component } from "react";
//import "./Home.css";

export default class HomeMission extends Component {
    render() {
        return (
            <div>
                <div className="vector2 row">
                    <div className="column">
                        <img className="homeMissionVector1" src="/assets/vector2.png" alt="vector2" />
                    </div>

                    <div className="column">
                        <img className="homeMissionVector2" src="/assets/vector2.png" alt="vector2" />
                    </div>
                </div>
                <div class="container-fluid pb-5 mb-5 w-75">
                    <h1 class="pt-5 text-center container-sm title">Our Mission</h1>
                    <p id="subtitle_home" class="pb-lg-1 mx-5 mt-5">
                        The Association for the Advancement of Science and Engineering
                        Education (AASEE) is dedicated to advancing science and
                        engineering education at the K-12 level.
                        The Association for the Advancement of Science and Engineering
                        Education (AASEE) seeks to inspire future science and engineering
                        leaders. AASEE gives priority to diverse populations, namely
                        Canada’s first nations peoples, girls, and those in financial
                        need, as well as rural populations.
                    </p>
                    <p id="subtitle_home" class="pb-lg-5 mx-5">
                        We are mandated to work across
                        the globe, and are implementing an ambitious plan. To do so, AASEE
                        designs educational outreach workshops at the K-12 level and
                        travels to specific schools and school boards. The lessons the
                        volunteers teach are curriculum-relevant, hands-on activities,
                        which are meant to engage the student, along with teachers. The
                        Association for the Advancement of Science and Engineering
                        Education is a registered charity in Canada.
                    </p>
                </div>
            </div>

        );
    }
}
