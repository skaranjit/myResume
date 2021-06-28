import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from "./../../assets/logos/logo.png";
import home from "./../../pages/home.js";
import Profile from "../../pages/Profile";

class MenuBar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: "closed",
    };
    this.variant = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "-100%" },
    };
  }
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" id="sidebar">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() =>
            this.setState({
              isOpen: "open",
            })
          }
        />
        <Navbar.Brand href="#">
          <motion.img
            a
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            whileHover={{
              scale: 3,
              rotate: [0, 0, 270, 270, 0],
            }}
            src={logo}
            width="40px"
            height="40px"
          ></motion.img>
        </Navbar.Brand>

        <Navbar.Collapse id="sidebar" className="justify-content-end">
          <Nav defaultActiveKey="#">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#Profile">Profile</Nav.Link>
            <Nav.Link href="#About">Projects</Nav.Link>
            <Nav.Link href="#ContactMe">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MenuBar;
