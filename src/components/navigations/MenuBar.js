import React, { Component, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from "./../../assets/logos/logo.png";

class MenuBar extends Component {
  constructor() {
    super();
    this.state = {
      navExpanded: false,

      isOpen: "open",
      selected: "home",
    };
    this.variant = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "-100%" },
    };
  }
  setExpanded() {
    this.setState({
      navExpanded: this.state.navExpanded === false ? "exapanded" : false,
      isOpen: this.state.isOpen === "closed" ? "open" : "closed",
    });
  }

  handleClose() {
    this.setState({
      setShow: false,
    });
  }
  handleShow() {
    this.setState({
      setShow: true,
    });
  }

  render() {
    const variants = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "-100%" },
    };

    return (
      <motion.nav
        animate={this.state.isOpen ? "open" : "closed"}
        variants={variants}
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-3"
      >
        <div className="container-fluid">
          <button
            onClick={() =>
              setTimeout(() => {
                this.setExpanded();
              }, 150)
            }
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <motion.img
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
          </a>

          <div
            className={
              this.state.navExpanded
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarTogglerDemo03"
            style={{
              alignContent: "end",
              justifyContent: "end",
              justifyItems: "end",
            }}
          >
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              defaultChecked={this.state.selected}
              style={this.state.navExpanded ? {} : { marginLeft: "70vw" }}
            >
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.95, rotate: 45 }}
                  onClick={() =>
                    this.setState({
                      navExpanded: false,
                      selected: "home",
                    })
                  }
                  className={
                    this.state.selected == "home"
                      ? "nav-link active"
                      : "nav-link "
                  }
                  aria-current="page"
                  href="#"
                >
                  Home
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.95, rotate: 45 }}
                  onClick={() =>
                    this.setState({
                      navExpanded: false,
                      selected: "About",
                    })
                  }
                  className={
                    this.state.selected == "About"
                      ? "nav-link active"
                      : "nav-link "
                  }
                  href="#About"
                >
                  About
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.95, rotate: 45 }}
                  onClick={() =>
                    this.setState({
                      navExpanded: false,
                      selected: "Contact",
                    })
                  }
                  className={
                    this.state.selected == "Contact"
                      ? "nav-link active"
                      : "nav-link "
                  }
                  href="#Contact"
                  tabindex="-1"
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    );
  }
}

export default MenuBar;
