import React from "react";
import MenuBar from "../components/navigations/MenuBar";
import Footer from "../components/navigations/Footer";

import "../assets/css/Layout.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MenuBar
        style={{
          flex: 1,
        }}
      />

      {props.children}

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
