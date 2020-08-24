import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
         <Container>
             <Jumbotron>
                 <h2>Commited to helping students love science and engineering!</h2>
             </Jumbotron>
         </Container>
        )
    }
}
