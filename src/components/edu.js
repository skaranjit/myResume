import React from "react";
import {
  motion,
  motionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
function Edu(props) {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 1] }}
        transition={{ duration: 5 }}
      >
        <h3>Bachelor's in Computer Science</h3>
        MSUM, Moorhead, MN, USA (Graduated May 2021)
      </motion.div>
      <ul>
        <h5 className="mb-1">Core Courses Completed</h5>
        <li>
          <p>
            Compiler (Implemented compiler in java using visitor pattern design)
          </p>
        </li>
        <li>
          <p>
            Operating System ( Different layer of operating system and worked on
            Xv6 operating system implementing lazy page allocation, threads etc.
            )
          </p>
        </li>
        <li>
          <p>
            Computer Architecture (Complex architecture of computer system with
            some implementation of assembly language)
          </p>
        </li>
        <li>
          <p>
            Programming Languages ( Concepts and differences in programming
            languages like Lua, fortran, c, c++ , java etc).
          </p>
        </li>
        <li>
          {" "}
          <p>Python ( Python 3)</p>
        </li>
        <li>
          {" "}
          <p>C# ( C# with .net framework 3.5)</p>
        </li>
        <li>
          {" "}
          <p>C++ ( Hands on with basic to advance concept of C++ Language)</p>
        </li>
        <li>
          <p>
            Software Engineering ( Designed POS system in react native using
            redux in an agile development environment).
          </p>
        </li>
        <li>
          {" "}
          <p>
            Database (In depth with Relational database, object oriented
            database, object relational database and their data structures and
            query languages.)
          </p>
        </li>
      </ul>
      <ul>
        <h5>Final Project</h5>
        <li>
          <p>
            Worked with BertQA transformer using python which can be used as
            question answering machine that can understand the sentiments of the
            question and the passage to correctly answer the question for the
            related context. https://github.com/skaranjit/BertQA
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Edu;
