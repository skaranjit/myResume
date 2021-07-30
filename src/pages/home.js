import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import profile from "./../assets/img/profile.png";
import { SocialIcon } from "react-social-icons";
import Edu from "./../components/edu.js";
import Exp from "./../components/exp.js";
import SideBar from "./../components/sidebar";
import {
  motion,
  motionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const Section = styled.div`
  justify-conter: center;
  align-item: center;
`;
const Container1 = styled.div`
  padding: 5rem 2rem;
  display: flex;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;

  margin-bottom: "10px";
  justify-content: center;
  align-items: center;
`;
const ColumnRight = styled.div`
  padding: 5rem 2rem;
  display: flex;
  flex:1
  flex-direction: column;
  justify-content: center;
  
  align-items: center;
`;

const contentOffsetY = motionValue(0);

const Home = () => {
  const ref = useRef();
  const [progress, setProgress] = useState(0);
  const { scrollY, scrollYProgress } = useViewportScroll();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    // var x = scrollYProgress.onChange((v) => v);
    // return x;
    return scrollY.onChange((v) => setProgress(v));
  }, [scrollYProgress, scrollY]);
  console.log(progress);
  const scale = useTransform(scrollYProgress, [1, 0], [0.8, 1], {
    clamp: false,
  });

  return (
    <div>
      <motion.section
        style={{
          scale,
          flex: "1",
          display: "flex",
          flexdirection: "row",
          flexWrap: "wrap",
          flexFlow: "column",
          marginBottom: "10px",
        }}
        id="top-page"
        ref={ref}
        className="bg-dark"
      >
        <Container1 data-aos="fade-left" clasName="bg-dark vh-100 ">
          <motion.div
            animate={{ scale: [2, 1] }}
            style={{
              maxHeight: "300px",
              maxWidth: "300px",
              borderRadius: "50%",
              marginBottom: "15px",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              alignContent: "space-around",
            }}
          >
            <img
              src={profile}
              className="rounded-circle"
              style={{ height: "auto", width: "100%" }}
            ></img>
          </motion.div>
          <h2
            style={{
              color: "#ffff",

              textAlign: "center",
            }}
            class="display-3  "
          >
            Suman Karanjit
          </h2>

          <h6 class=" " style={{ color: "#6c757d", textAlign: "center" }}>
            Aspiring software developer experienced in object-oriented
            programming; developing, testing and debugging code; designing
            interfaces; and administering systems and networks.
          </h6>
        </Container1>
      </motion.section>

      <SideBar progress={progress} profile={profile} />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",

          alignItems: "center",
          maxWidth: "80vw",
          minHeight: "100vh",
          position: "relative",
          marginLeft: "20vw",
          flexWrap: "wrap",
          marginRight: "10px",
        }}
      >
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <motion.button
              whileFocus={{ scaleX: [0.8, 1, 0.8] }}
              whileTap={{ scaleZ: [0.8, 1, 0.8] }}
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#Edu"
              type="button"
              role="tab"
              aria-controls="Edu"
              aria-selected="true"
              style={{ marginRight: "20px" }}
            >
              Education
            </motion.button>
          </li>
          <li class="nav-item" role="presentation">
            <motion.button
              whileFocus={{ scaleX: [0.8, 1, 0.8] }}
              whileTap={{ scaleZ: [0.8, 1, 0.8] }}
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#Exp"
              type="button"
              role="tab"
              aria-controls="Exp"
              style={{ marginRight: "20px" }}
              aria-selected="false"
            >
              Professional Experiences
            </motion.button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="Edu"
            role="tabpanel"
            aria-labelledby="Edu-tab"
          >
            <Edu />
          </div>
          <div
            class="tab-pane fade"
            id="Exp"
            role="tabpanel"
            aria-labelledby="Exp-tab"
          >
            <Exp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
