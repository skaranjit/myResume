import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import {
  motion,
  transform,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { auto } from "@popperjs/core";

const Section = styled.section`
  justify-conter: center;
  align-item: center;
  display: flex;
`;
const ColumnLeft = styled.div`
  padding: 5rem 2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const ColumnRight = styled.div`
  padding: 5rem 2rem;
  display: flex;
  flex:1
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const ref = useRef();
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [0, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0], [0.5, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0], [0, 0]);

  return (
    <div>
      <motion.Section
        style={{
          scale,
          rotate,
          height: "100vh",
        }}
        ref={ref}
        className="bg-dark "
      >
        <motion.div className="container-fluid">
          <ColumnLeft
            style={{ background: "#0000" }}
            data-aos="fade-left"
            clasName="bg-dark"
          >
            <motion.figure
              class="text-center"
              animate={{ scale: [8, 1] }}
              transition={{ duration: 0.9 }}
            >
              <h2
                style={{ color: "#ffff", padding: 0, margin: 0 }}
                class="display-2"
              >
                Suman Karanjit
              </h2>
              <h3 class=" " style={{ color: "#6c757d" }}>
                Software Developer
              </h3>
            </motion.figure>
          </ColumnLeft>
        </motion.div>
      </motion.Section>
      <motion.Section
        style={{ padding: 0, margin: "0px", rotate }}
        className="bg-light "
      >
        <motion.div className=" container bg-light ">
          <motion.figure className="text-center">
            <h2
              data-aos="fade-right"
              style={{
                paddingBottom: "40px",
              }}
              class="display-4"
            >
              Education
            </h2>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item bg-light">
                <h2 class="accordion-header" id="flush-headingOne">
                  Bachelor's in Computer Science
                </h2>

                <div class="accordion-body">
                  MSUM, Moorhead, MN, USA (Graduated May 2021)
                </div>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item bg-light">
                <h2 class="accordion-header" id="flush-headingOne">
                  Diploma in Computer Information Technology
                </h2>

                <div class="accordion-body">
                  National Technology Institute, Auckland, New Zealand
                  (Graduated March 2012)
                </div>
              </div>
            </div>
          </motion.figure>
        </motion.div>
      </motion.Section>
      <motion.Section style={{ rotate }} className="bg-light ">
        <motion.div
          style={{ padding: "20px" }}
          className=" container-fluid bg-light "
        >
          <motion.figure className="text-center">
            <h2
              data-aos="fade-right"
              style={{ padding: "40px" }}
              class="display-4"
            >
              Experience
            </h2>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item bg-light">
                <h2 class="accordion-header" id="flush-headingOne">
                  Helpdesk Front Desk Representative
                </h2>

                <div class="accordion-body">
                  MSUM, Moorhead, MN <br></br>{" "}
                  <p style={{ textAlign: "match-parent", fontSize: 13 }}>
                    Providing Support via phone for the Students and Faculty
                    Staff. <br></br> Handling Tickets and following up the push
                    backs <br></br> Troubleshooting and resolving Application
                    and Hardware technical issues.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item bg-light">
                <h2 class="accordion-header" id="flush-headingOne">
                  System Administrator
                </h2>

                <div class="accordion-body">
                  Blancco LLC. Austin,TX <br></br>{" "}
                  <p style={{ textAlign: "match-parent", fontSize: 13 }}>
                    <p style={{ textAlign: "match-parent", fontSize: 13 }}>
                      Managing local server as well as Cloud (AWS)<br></br>{" "}
                      Working on projects that best facilitates better access
                      and secure networks and equipment.<br></br> Log Management
                      (IBM QRADAR)
                      <br></br>Providing Support for the employees for any
                      issues regarding applications or devices.
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item bg-light">
                <h2 class="accordion-header" id="flush-headingOne">
                  IT Support Technician (OTP 2)
                </h2>

                <div class="accordion-body">
                  ATOS, Fargo, ND (NOV 2015- JAN 2017) <br></br>{" "}
                  <p style={{ textAlign: "match-parent", fontSize: 13 }}>
                    Providing Customer Support via phone. <br></br>Handling
                    Tickets and following up the push backs <br></br>{" "}
                    Troubleshooting and resolving issues regarding technical
                    issues with Mcdonald's IT equipment.
                  </p>
                </div>
              </div>
            </div>
          </motion.figure>
        </motion.div>
      </motion.Section>
    </div>
  );
};

export default Home;
