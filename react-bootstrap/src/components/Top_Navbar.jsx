import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  Dropdown,
  SplitButton,
  MenuItem,
  Button,
  ButtonGroup,
  NavLink,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Top_Navbar.css";

export default class Top_Navbar extends Component {
<<<<<<< HEAD
    render() {
        return (
            <Navbar className="navbar navbar-expand-sm navbar-custom sticky content sticky-element responsive-navbar-nav" collapseOnSelect expand="lg" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link eventKey={1} componentClass={Link} href="/" to="/">HOME</Nav.Link>
                <Dropdown as={ButtonGroup}>
                      <Button variant="dropdown-toggle" href="/what_we_do">WHAT WE DO</Button>
=======
  render() {
    return (
      <Navbar
        className="navbar navbar-expand-sm navbar-custom sticky content sticky-element"
        collapseOnSelect
        expand="lg"
        variant="light"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey={1} componentClass={Link} href="/" to="/">
              HOME
            </Nav.Link>
            <Dropdown as={ButtonGroup}>
              <Button variant="dropdown-toggle" href="/what_we_do">
                WHAT WE DO
              </Button>
>>>>>>> d91fe6cf6d67ff62264f6ad4de6345678a65ced6

              <Dropdown.Toggle
                split
                variant="dropdown-toggle"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item
                  eventKey={3}
                  componentClass={Link}
                  href="/Strategies"
                  to="/Strategies"
                >
                  Strategies
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey={4}
                  componentClass={Link}
                  href="/Classroom"
                  to="/Classroom"
                >
                  Classroom Activties
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup}>
              <Button variant="dropdown-toggle" href="/get_involved">
                GET INVOLVED
              </Button>

              <Dropdown.Toggle
                split
                variant="dropdown-toggle"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item
                  eventKey={3}
                  componentClass={Link}
                  href="/get_involved/#Volunteer"
                  to="/get_involved/#Volunteer"
                >
                  Be a Volunteer
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey={4}
                  componentClass={Link}
                  href="/get_involved/#Partner"
                  to="/get_involved/#Partner"
                >
                  Be our Partner
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/" to="/">
          <img
            id="logo-navbar-middle"
            src="/assets/HeaderLogo.png"
            width="300"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Dropdown as={ButtonGroup}>
              <Button variant="dropdown-toggle" href="/about">
                ABOUT
              </Button>

              <Dropdown.Toggle
                split
                variant="dropdown-toggle"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item
                  eventKey={5}
                  componentClass={Link}
                  href="/news"
                  to="/news"
                >
                  News
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey={6}
                  componentClass={Link}
                  href="/volunteers"
                  to="/volunteers"
                >
                  Volunteers
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey={7}
                  componentClass={Link}
                  href="/BOD"
                  to="/BOD"
                >
                  Board of Directors
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link
              eventKey={8}
              componentClass={Link}
              href="/contact"
              to="/contact"
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              eventKey={9}
              componentClass={Link}
              href="/donate"
              to="/donate"
            >
              DONATE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
