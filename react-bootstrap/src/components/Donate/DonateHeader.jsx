import React, { Component } from 'react'
//import './Donate.css'

export default class DonateHeader extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                <img src="/assets/DonateHeader.jpg" class="header img-fluid" alt="DonateHeader.jpg" />
                </div>
                <div>
                    <h1 class="pt-5 text-center container-sm title">Donate</h1>
                    <h2 class="pt-3 text-center container-sm subtitle">Our organization is funding by generous donations from people and organizations. We accept the following methods of donation.</h2>
                </div>
            </div>
        )
    }
}
