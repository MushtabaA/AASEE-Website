import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './News.css'

export default class News extends Component {
    render() {
        return (
            <div>
                <img src="/assets/news_header.png" class = "header" alt="news_header.png"/>
                <img src="/assets/global.png" class = "global p-4" alt="global.png"/>

             <hr class = "lines"/> 
            <div className="NewsHeader">
                <h1 class="pt-1 ml-2 text-left container-sm title">AASEE on the Road</h1>
                <h5 class="pt-0 ml-2 mb-0 text-left container-sm subtitle">
            FEB 15 2017
                </h5>
                <h5 class="pt-0 ml-2 text-left container-sm subtitle">
            kevinbrennan
                </h5>

            </div>
           </div>
        )
    }
}
