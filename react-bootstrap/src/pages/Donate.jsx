import React, { Component } from 'react';
import './Donate.css';
import DonateHeader from "../components/Donate/DonateHeader";
import DonateMain from "../components/Donate/DonateMain";

export default class Donate extends Component {
    render() {
        return (
            <div>
                <DonateHeader />

                <DonateMain />
            </div>
        )
    }
}
