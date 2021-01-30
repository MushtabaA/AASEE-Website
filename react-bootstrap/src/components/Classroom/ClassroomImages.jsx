import React, { Component } from 'react'
//import './Classroom.css'

export default class ClassroomImages extends Component {
    render() {
        return (
            <div class="container">
                    <div class="row">
                        {/* Column1 */}
                        <div class="col-md-6">
                            <div class="Examples">
                                <img src="/assets/Buoyancy.jpg" class="sub" alt="" width="200" />
                                <h2 class="pt-3 text-center container-sm subtitle">Having Fun With Buoyancy</h2>
                                <p class="pt-2 text-center container-sm subtitle">Grade 2</p>
                            </div>
                            <div class="Examples">
                                <img src="/assets/Sound.jpg" class="sub" alt="" width="200" />
                                <h2 class="pt-3 text-center container-sm subtitle">Can we see sound?</h2>
                                <p class="pt-2 text-center container-sm subtitle">Grade 3</p>
                            </div>
                            <div class="Examples">
                                <img src="/assets/Computer.jpg" class="sub" alt="" width="200" />
                                <h2 class="pt-3 text-center container-sm subtitle">How Computers Work</h2>
                                <p class="pt-2 text-center container-sm subtitle">Grade 3, 4 & 5</p>
                            </div>
                        </div>

                        {/* Column2 */}
                        <div class="col-md-6">
                            <div class="Examples">
                                <img src="/assets/Light.jpg" class="sub" alt="" width="200" />
                                <h2 class="pt-3 text-center container-sm subtitle">Where Do We Use Light?</h2>
                                <p class="pt-2 text-center container-sm subtitle">Grade 4</p>
                            </div>
                            <div class="Examples">
                                <img src="/assets/Struct.jpg" class="sub" alt="" width="200" />
                                <h2 class="pt-3 text-center container-sm subtitle">Structure</h2>
                                <p class="pt-2 text-center container-sm subtitle">Grade 4</p>
                            </div>
                            <div class="Examples">
                                <img src="/assets/Light2.jpg" class="sub" alt="" width="200" />
                                <h2 class="pt-3 text-center container-sm subtitle">Having Fun With Light</h2>
                                <p class="pt-2 text-center container-sm subtitle">Grade 4</p>
                            </div>
                        </div>

                    </div>
                    <div id="center" class="Examples">
                        <img src="/assets/Elec.jpg" alt="" width="200" />
                        <h2 class="pt-3 text-center container-sm subtitle">Making Electricity</h2>
                        <p class="pt-2 text-center container-sm subtitle">Grade 5</p>
                    </div>
                </div>
        )
    }
}
