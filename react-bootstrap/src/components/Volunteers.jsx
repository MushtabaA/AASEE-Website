import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Volunteers.css'

export default class Volunteers extends Component {
    render() {
        return (
            <div>
                <div className="headTitle">
                    <h1 class="pt-5 text-center container-sm title">Volunteers</h1>
                </div>
                <div class="pb-5 container grid-xl mt-sm-half mt-full">
                    <div class="columns pics">
                        <div className="column col-md-6 col-3 px-1"><div className="piccontainer"><img class="img-fluid" src="/assets/v1.jpg" alt="volun1"/><div class="overlay"><div class="text">Priyanka Gautam <br/> Lead Media Relations <br/> Fund Raising Member</div></div></div></div>
                        <div className="column col-md-6 col-3 px-1"><div className="piccontainer"><img class="img-fluid" src="/assets/v2.jpg" alt="volun2"/><div class="overlay"><div class="text">Andrea Aguirre <br/> Lead Program Prep <br/> Office Member</div></div></div></div>
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"><div className="piccontainer"><img class="img-fluid" src="/assets/v3.jpg" alt="volun3"/><div class="overlay"><div class="text">Rigel Tormon <br/> Fund Raising Member</div></div></div></div>
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"><div className="piccontainer"><img class="img-fluid" src="/assets/v4.jpeg" alt="volun4"/><div class="overlay"><div class="text">Whitney Ebose <br/> Book Store Member</div></div></div></div>
                    </div>
                    <div class="columns pics">
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"><div className="piccontainer"><img class="img-fluid" src="/assets/v5.png" alt="volun5"/><div class="overlay"><div class="text">Mandeep Pandey</div></div></div></div>
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"><div className="piccontainer"><img class="img-fluid" src="/assets/v6.jpg" alt="volun6"/><div class="overlay"><div class="text">Ahmad Awan <br/> Book Store Lead</div></div></div></div>
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"><div className="piccontainer"><img class="img-fluid" src="/assets/v7.jpg" alt="volun7"/><div class="overlay"><div class="text">Sienna McPherson</div></div></div></div>
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"><div className="piccontainer"><img class="img-fluid" src="/assets/v8.jpg" alt="volun8"/><div class="overlay"><div class="text">Alden Lien <br/> Program Pep Member <br/> Book Store Member</div></div></div></div>
                    </div>
                    <div class="columns pics">
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"><div className="piccontainer"><img class="img-fluid" src="/assets/vn.jpg" alt="volun9"/><div class="overlay"><div class="text">Nicolas Vuong <br/> Office Lead <br/> Program Prep Member</div></div></div></div>
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"><div className="piccontainer"><img class="img-fluid" src="/assets/vn.jpg" alt="volun10"/><div class="overlay"><div class="text">Nicolas Teng <br/> Program Prep Member <br/> Book Store Member</div></div></div></div>
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"><div className="piccontainer"><img class="img-fluid" src="/assets/vn.jpg" alt="volun11"/><div class="overlay"><div class="text">Anis Haque <br/> Fund Raising Lead</div></div></div></div>
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"><div className="piccontainer"><img class="img-fluid" src="/assets/vn.jpg" alt="volun12"/><div class="overlay"><div class="text">Helen Zhang <br/> Book Store Member</div></div></div></div>
                    </div>
                    <div class="columns pics">
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"></div>
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"><div className="piccontainer"><img class="img-fluid" src="/assets/vn.jpg" alt="volun13"/><div class="overlay"><div class="text">Mohammad Khan <br/> School Liaison Member</div></div></div></div>
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"><div className="piccontainer"><img class="img-fluid" src="/assets/vn.jpg" alt="volun14"/><div class="overlay"><div class="text">Farin Tabassum <br/> School Liaison Lead</div></div></div></div>
                        <div className="column col-md-6 col-3 px-1 mt-md-qtr"></div>
                    </div>
                    <div class="centered mt-sm-full mt-full pb-5">
                    <a href="mailto:aaseewebsite@mail.com" title="Contact for more details" class="btnlink">Click To Volunteer!</a>
                    </div>
                </div>
            </div>
        )
    }
}
