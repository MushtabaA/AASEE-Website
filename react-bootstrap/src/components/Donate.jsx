import React, { Component, Fragment } from 'react'

export default class Donate extends Component {
    render() {
        return (
            <Fragment>
            <div>
            <h1 class="title">Donate</h1>
            <h2 class="sub">Our organization is funding by generous donations from people and organizations. We accept the following methods of donation.</h2>
            </div>
            <div class="Payment">
            <h2 class="subtitle">Visa, Master Card or PayPal</h2>
            <a href="https://www.paypal.com/donate/?token=EUjj0OyxQ5vXnWpeXDipMuHhM4KfQDmWcYdryoOe1X-5MNsaIMto-aKz-XzZ31cdQ92BIm&country.x=CA&locale.x=CA"><img src="/assets/Visa.gif" alt="" width="200"/></a>
            <a href="/contact"><p class="Under"><u>Contact us for tax receipt.</u></p></a>
            </div>
            <div class="Payment">
            <h2 class="subtitle">By Cheque</h2>
            <a href="/contact"><img src="/assets/Cheque.png" alt="" width="200"/></a>
            <a href="/contact"><p class="Under"><u>Contact us for tax receipt.</u></p></a>

            </div>
            <div class="Payment">
            <h2 class="subtitle">In Person</h2>
            <a href="/contact"><img src="/assets/donate_person.png" alt="" width="200"/></a>
            <a href="/contact"><p class="Under"><u>Contact us for tax receipt.</u></p></a>

            </div>
            <div class="Payment">
            <h2 class="subtitle">Canada Helps</h2>
            <a href="https://www.canadahelps.org/en/dn/16867"><img src="/assets/donate_canadahelps.png" alt="" width="200"/></a>
            <p class="Under">Tax receipt will be issued by Canada Helps.</p>

            </div>
            <div class="Payment">
            <h2 class="subtitle">Aeroplan Miles</h2>
            <a href="https://beyondmiles.aeroplan.com/eng#/"><img src="/assets/donate_aeroplan.png" alt="" width="200"/></a>
            <p class="Under">Donate your miles.</p>

            </div>
            <div class="Payment">
            <h2 class="subtitle">Amazon.ca</h2>
            <img src="/assets/donate_amazon.png" alt="" width="200"/>
            <p class="Under">Buy textbooks from AASEE's bookstore</p>
            </div>
            </Fragment>
        )
    }
}
