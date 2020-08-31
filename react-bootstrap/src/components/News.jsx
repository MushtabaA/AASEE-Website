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
            <div></div>
           </div>
        )
    }
}
