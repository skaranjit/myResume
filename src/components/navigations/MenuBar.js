import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
class MenuBar extends Component {
  render() {
    return (
      <header className="fixed-top" style={{}}>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" id="sidebar">
          <Container fluid style={{ marginLeft: 40, marginRight: 40 }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#home">Logo</Navbar.Brand>

            <Navbar.Collapse id="sidebar" className="justify-content-end">
              <Nav defaultActiveKey="#home">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#About">About Me</Nav.Link>
                <Nav.Link href="#ContactMe">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default MenuBar;
