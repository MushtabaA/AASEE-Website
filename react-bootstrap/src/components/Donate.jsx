import React, { Component, Fragment } from 'react'

export default class Donate extends Component {
    render() {
        return (
            <Fragment>
            <div>
                <h1 className="title">Donate</h1>
                <h2 className="sub">Our organization is funding by generous donations from people and organizations. We accept the following methods of donation.</h2>
            </div>
            <div className="Payment1">
                <h2 className="subtitle">Visa, Master Card or PayPal</h2>
                <img src="/assets/Visa.gif" alt="" width="200"/>
            </div>
            <div className="Payment2">
            <h2 className="subtitle">By Cheque</h2>
                <img src="/assets/Cheque.png" alt="" width="200"/>
            </div>
            </Fragment>
        )
    }
}
