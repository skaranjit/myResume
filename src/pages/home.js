import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import profile from "./../assets/img/profile.png";
import { SocialIcon } from "react-social-icons";
import {
  motion,
  motionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const Section = styled.section`
  justify-conter: center;
  align-item: center;
  display: flex;
`;
const Container1 = styled.div`
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

  const scale = useTransform(scrollYProgress, [1, 0], [0, 1], {
    clamp: false,
  });

  console.log(scrollY, scrollYProgress);
  return (
    <div>
      <motion.Section
        style={{
          scale,
        }}
        ref={ref}
        className="bg-dark"
      >
        <motion.div>
          <Container1
            style={{
              flex: 1,
              minHeight: "100vh",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            data-aos="fade-left"
            clasName="bg-dark vh-100 "
          >
            <motion.div
              animate={{ scale: [2, 1] }}
              style={{
                height: "300px",
                width: "300px",
                borderRadius: "50%",

                flex: 1,
                paddingTop: "10px",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <img
                src={profile}
                className="rounded-circle"
                style={{ height: "auto", width: "100%" }}
              ></img>
            </motion.div>
            <motion.div
              animate={{ scale: [5, 1] }}
              transition={{ duration: 0.9 }}
              style={{
                flex: 1,
                paddingTop: "20px",
              }}
            >
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
            </motion.div>
          </Container1>
        </motion.div>
      </motion.Section>
      <div style={{ display: "flex", width: "100%" }}>
        <motion.div
          animate={progress > 345 ? { scale: [0.3, 1] } : {}}
          id="sidebar sticky"
          className="bg-light"
          style={
            progress > 354
              ? {
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "90px",
                  position: "fixed",
                  top: "0%",

                  height: "100vh",
                  zIndex: " 999",

                  paddingTop: "90px",
                  paddingLeft: "4px",

                  justifyContent: "right",
                  marginRight: "10%",
                }
              : {
                  display: "none",
                }
          }
        >
          <motion.div
            animate={progress > 345 ? { scale: [3, 1] } : {}}
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
            animate={progress > 348 ? { scale: [0.2, 1] } : {}}
            transition={{ duration: 1 }}
            style={{
              display: "flex",
              flex: "0.1",
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
              marginLeft: "25px",
              alignItems: "flex-start",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.6, duration: 1.5 },
              }}
            >
              <img
                alt="HTML5"
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.4, duration: 1.5 },
              }}
            >
              <img
                alt="CSS3"
                src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.2, duration: 1.5 },
              }}
            >
              <img
                alt="Python"
                src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1, duration: 1.5 },
              }}
            >
              <img
                alt="C"
                src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
              />
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.8, duration: 1.5 },
              }}
            >
              <img
                alt="C++"
                src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.6, duration: 1.5 },
              }}
            >
              <img
                alt="C#"
                src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 1.5 },
              }}
            >
              <img
                alt="PHP"
                src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 1.5 },
              }}
            >
              <img
                alt="React"
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.1, duration: 1.5 },
              }}
            >
              <img
                alt="JavaScript"
                src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.Section
        style={{ paddingLeft: "38px", marginLeft: "38px" }}
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
      <motion.Section
        style={{
          paddingLeft: "38px",
          marginLeft: "38px",
        }}
        className="bg-light "
      >
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
              Professional Experience
            </h2>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item bg-light">
                <h2 class="accordion-header" id="flush-headingOne">
                  IT Help Desk
                </h2>

                <div class="accordion-body">
                  MSUM, Moorhead, MN <br></br>{" "}
                  <p style={{ textAlign: "match-parent", fontSize: 13 }}>
                    Providing Support via phone for the Students and Faculty
                    Staff. <br></br> Handling Tickets and following up the push
                    backs <br></br> Troubleshooting and resolving Application
                    and Hardware technical issues. <br></br>Manage and fix Tier
                    I and some Tier II problems in both Windows 10 and Mac
                    workstations. <br></br>
                    Document and monitor support requests to create a knowledge
                    base for future references.
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
                      Monitoring and Managing AWS resources, Internal Servers,
                      and Resources in AD.<br></br> Working on projects that
                      best facilitates better access and secure networks and
                      equipment.<br></br> Log Management (IBM QRADAR)
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
                  ATOS, Fargo, ND <br></br>{" "}
                  <p style={{ textAlign: "match-parent", fontSize: 13 }}>
                    Providing Customer Support via phone. <br></br>Handling
                    Tickets and following up the push backs <br></br>{" "}
                    Troubleshooting and resolving issues regarding technical
                    issues with Mcdonald's IT equipment.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item bg-light">
                <h2 class="accordion-header" id="flush-headingOne">
                  IT Support Assistant
                </h2>

                <div class="accordion-body">
                  MSUM, Moorhead, MN <br></br>{" "}
                  <p style={{ textAlign: "match-parent", fontSize: 13 }}>
                    Executed several Installations and configurations of windows
                    operating systems, Anti-viruses, Office packages and other
                    software.
                    <br></br>Monitored and resolved Network Support issues:
                    Troubleshooting, printer issues, application support issues,
                    as well as student and staff issues.
                    <br></br> Executed several windows server configurations
                    band installations.
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
