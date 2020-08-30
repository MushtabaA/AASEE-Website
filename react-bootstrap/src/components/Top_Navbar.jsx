import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Top_Navbar.css'

export default class Top_Navbar extends Component {
    render() {
        return (
            <Navbar className="navbar navbar-expand-sm navbar-custom" collapseOnSelect expand="lg" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link eventKey={1} componentClass={Link} href="/" to="/">HOME</Nav.Link>
                <Nav.Link class="wwd" eventKey={2} componentClass={Link} href="/what_we_do" to="/what_we_do">WHAT WE DO</Nav.Link>
                <Nav.Link eventKey={3} componentClass={Link} href="/get_involved" to="/get_involved">GET INVOLVED</Nav.Link>
              </Nav>
              </Navbar.Collapse>
                      <Navbar.Brand href="/" to="/">
                          <img id="logo-navbar-middle" src="https://aasee.ca/cms/wp-content/themes/AASEE-Theme/images/aasee-white.png" width="300" alt=""/>
                      </Navbar.Brand>
             <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link eventKey={4} componentClass={Link} href="/about" to="/about">ABOUT</Nav.Link>
                <Nav.Link eventKey={5} componentClass={Link} href="/contact" to="/contact">CONTACT</Nav.Link>
                <Nav.Link eventKey={6} componentClass={Link} href="/donate" to="/donate">DONATE</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
