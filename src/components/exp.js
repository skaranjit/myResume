import React from "react";
import {
  motion,
  motionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
function Exp(props) {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 1] }}
        transition={{ duration: 5 }}
      >
        <h2 class="accordion-header" id="flush-headingOne">
          IT Help Desk
        </h2>
        MSUM, Moorhead, MN <br></br>{" "}
        <p style={{ textAlign: "match-parent", fontSize: 13 }}>
          Providing Support via phone for the Students and Faculty Staff.{" "}
          <br></br> Handling Tickets and following up the push backs <br></br>{" "}
          Troubleshooting and resolving Application and Hardware technical
          issues. <br></br>Manage and fix Tier I and some Tier II problems in
          both Windows 10 and Mac workstations. <br></br>
          Document and monitor support requests to create a knowledge base for
          future references.
        </p>
        <h2 class="accordion-header" id="flush-headingOne">
          System Administrator
        </h2>
        Blancco LLC. Austin,TX <br></br>{" "}
        <p style={{ textAlign: "match-parent", fontSize: 13 }}>
          <p style={{ textAlign: "match-parent", fontSize: 13 }}>
            Monitoring and Managing AWS resources, Internal Servers, and
            Resources in AD.<br></br> Working on projects that best facilitates
            better access and secure networks and equipment.
            <br></br> Log Management (IBM QRADAR)
            <br></br>Providing Support for the employees for any issues
            regarding applications or devices.
          </p>
        </p>
        <h2 class="accordion-header" id="flush-headingOne">
          IT Support Technician (OTP 2)
        </h2>
        ATOS, Fargo, ND <br></br>{" "}
        <p style={{ textAlign: "match-parent", fontSize: 13 }}>
          Providing Customer Support via phone. <br></br>Handling Tickets and
          following up the push backs <br></br> Troubleshooting and resolving
          issues regarding technical issues with Mcdonald's IT equipment.
        </p>
        <h2 class="accordion-header" id="flush-headingOne">
          IT Support Assistant
        </h2>
        MSUM, Moorhead, MN <br></br>{" "}
        <p style={{ textAlign: "match-parent", fontSize: 13 }}>
          Executed several Installations and configurations of windows operating
          systems, Anti-viruses, Office packages and other software.
          <br></br>Monitored and resolved Network Support issues:
          Troubleshooting, printer issues, application support issues, as well
          as student and staff issues.
          <br></br> Executed several windows server configurations band
          installations.
        </p>
      </motion.div>
    </section>
  );
}

export default Exp;
