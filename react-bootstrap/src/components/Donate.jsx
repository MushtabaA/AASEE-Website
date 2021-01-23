import React, { Component } from 'react'
import './Donate.css'

export default class Donate extends Component {
    render() {
        return (
            <div>
                <img src="/assets/DonateHeader.jpg" class="header img-fluid" alt="DonateHeader.png" />
                <div>
                    <h1 class="pt-5 text-center container-sm title">Donate</h1>
                    <h2 class="pt-3 text-center container-sm subtitle">Our organization is funding by generous donations from people and organizations. We accept the following methods of donation.</h2>
                </div>

                <div class="container">
                    <div class="row">
                        {/* Coulmn1 */}
                        <div class="col">
                            <div class="Payment">
                                <h2 id="title" class="pt-3 text-center container-sm subtitle">Visa, Master Card or PayPal</h2>
                                <a href="https://www.paypal.com/donate/?token=EUjj0OyxQ5vXnWpeXDipMuHhM4KfQDmWcYdryoOe1X-5MNsaIMto-aKz-XzZ31cdQ92BIm&country.x=CA&locale.x=CA"><img src="/assets/Visa.gif" class="sub" alt="" width="200" /></a>
                                <a href="/contact"><p class="pt-3 text-center container-sm subtitle"><u>Contact us for tax receipt.</u></p></a>
                            </div>
                            <div class="Payment">
                                <h2 id="title" class="pt-3 text-center container-sm subtitle">By Cheque</h2>
                                <a href="/contact"><img src="/assets/Cheque.png" class="sub" alt="" width="200" /></a>
                                <a href="/contact"><p class="pt-3 text-center container-sm subtitle"><u>Contact us for tax receipt.</u></p></a>

                            </div>
                            <div class="Payment">
                                <h2 id="title" class="pt-3 text-center container-sm subtitle">In Person</h2>
                                <a href="/contact"><img src="/assets/donate_person.png" class="sub" alt="" width="200" /></a>
                                <a href="/contact"><p class="pt-3 text-center container-sm subtitle"><u>Contact us for tax receipt.</u></p></a>

                            </div>
                        </div>
                        {/* Coulmn2 */}
                        <div class="col">
                            <div class=" ayment">
                                <h2 id="title" class="pt-3 text-center container-sm subtitle">Canada Helps</h2>
                                <a href="https://www.canadahelps.org/en/dn/16867"><img src="/assets/donate_canadahelps.png" class="sub" alt="" width="200" /></a>
                                <p class="pt-3 text-center container-sm subtitle">Tax receipt will be issued by Canada Helps.</p>

                            </div>
                            <div class="Payment">
                                <h2 id="title" class="pt-3 text-center container-sm subtitle">Aeroplan Miles</h2>
                                <a href="https://beyondmiles.aeroplan.com/eng#/"><img src="/assets/donate_aeroplan.png" class="sub" alt="" width="200" /></a>
                                <p class="pt-3 text-center container-sm subtitle">Donate your miles.</p>

                            </div>
                            <div class="Payment">
                                <h2 id="title" class="pt-3 text-center container-sm subtitle">Amazon.ca</h2>
                                <img src="/assets/donate_amazon.png" class="sub" alt="" width="200" />
                                <p class="pt-3 text-center container-sm subtitle">Buy textbooks from AASEE's bookstore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
