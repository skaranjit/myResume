import React from "react";
import MenuBar from "../components/navigations/MenuBar";
import Footer from "../components/navigations/Footer";
import { Container } from "react-bootstrap";
import "../assets/css/Layout.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MenuBar />

      {props.children}
    </React.Fragment>
  );
};

export default Layout;
