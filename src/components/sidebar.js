import React from "react";
import {
  motion,
  motionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import profile from "./../assets/img/profile.png";
import { SocialIcon } from "react-social-icons";

function SideBar(props) {
  return (
    <motion.div
      id="sidebar sticky"
      className="bg-light"
      style={
        props.progress > 354
          ? {
              display: "flex",
              flex: 1,
              flexDirection: "column",

              position: "fixed",
              top: "0",
              width: "90px",
              skewY: "20",
              height: "100vh",
              justifyContent: "flex-end",

              paddingTop: "90px",
              flexShrink: 0,
              flexFlow: "column",
            }
          : {
              display: "none",
            }
      }
    >
      <motion.div
        animate={props.progress > 354 ? { scale: [0, 1] } : {}}
        transition={{ duration: 0.5 }}
        style={{
          maxHeight: "80px",
          width: "80px",
          borderRadius: "50%",
          justifyContent: "center",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <img
          src={profile}
          className="rounded-circle"
          style={{ height: "auto", width: "100%" }}
        ></img>
        <h6 style={{ color: "darkslategray" }}>SK</h6>
      </motion.div>

      <motion.div
        id="connect"
        animate={props.progress > 354 ? { scale: [0.2, 1] } : {}}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "row",

          alignItems: "flex-start",
        }}
      >
        <SocialIcon
          url="https://github.com/skaranjit"
          style={{ height: 25, width: 25, margin: "4px" }}
        />
        <SocialIcon
          network="email"
          url="#Contact"
          style={{ height: 25, width: 25, margin: "4px" }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/suman-karanjit-967373211/"
          style={{ height: 25, width: 25, margin: "4px" }}
        />
      </motion.div>
      <div
        style={{
          display: "flex",
          flex: "0.8",
          flexDirection: "column",
          justifyContent: "flex-end",

          alignItems: "flex-start",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            props.progress > 354
              ? {
                  opacity: 1,
                  transition: { delay: 2.6, duration: 1.5 },
                }
              : {}
          }
        >
          <img
            alt="HTML5"
            src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            props.progress > 354
              ? {
                  opacity: 1,
                  transition: { delay: 2.4, duration: 1.5 },
                }
              : {}
          }
        >
          <img
            alt="CSS3"
            src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            props.progress > 354
              ? {
                  opacity: 1,
                  transition: { delay: 2.2, duration: 1.5 },
                }
              : {}
          }
        >
          <img
            alt="Python"
            src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            props.progress > 354
              ? {
                  opacity: 1,
                  transition: { delay: 2, duration: 1.5 },
                }
              : {}
          }
        >
          <img
            alt="C"
            src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
          />
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            props.progress > 354
              ? {
                  opacity: 1,
                  transition: { delay: 1.8, duration: 1.5 },
                }
              : {}
          }
        >
          <img
            alt="C++"
            src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            props.progress > 354
              ? {
                  opacity: 1,
                  transition: { delay: 1.6, duration: 1.5 },
                }
              : {}
          }
        >
          <img
            alt="C#"
            src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            props.progress > 354
              ? {
                  opacity: 1,
                  transition: { delay: 1.2, duration: 1.5 },
                }
              : {}
          }
        >
          <img
            alt="PHP"
            src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            props.progress > 354
              ? {
                  opacity: 1,
                  transition: { delay: 0.6, duration: 1.5 },
                }
              : {}
          }
        >
          <img
            alt="React"
            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            props.progress > 354
              ? {
                  opacity: 1,
                  transition: { delay: 0.2, duration: 1.5 },
                }
              : {}
          }
        >
          <img
            alt="JavaScript"
            src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SideBar;
