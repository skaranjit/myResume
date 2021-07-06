import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  motion,
  motionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xwkaqqeg",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main className="container " style={{ marginTop: "10vh" }}>
      <h1>Connect With Me </h1>
      <p style={{ fontFamily: "cursive", fontSize: "20px" }}>
        {" "}
        Send me a message and I will get back to you as soon as possible.
      </p>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <motion.div
          animate={{ scale: [0, 0.4, 0.8, 1] }}
          transition={{ times: [0, 0.1, 0.1, 1] }}
          className="form-group"
        >
          <div class="col-sm-offset-2 col-sm-10">
            <label
              for="name"
              style={{
                fontFamily: "fantasy",
              }}
            >
              Name
            </label>
            <input
              className="form-control"
              id="name"
              type="text"
              name="_name"
              onChange={handleOnChange}
              required
              value={inputs.name}
              width="20%"
            />
          </div>
        </motion.div>
        <motion.div
          animate={{ scale: [0, 0.4, 0.8, 1] }}
          transition={{ times: [0, 0.1, 0.1, 1] }}
          class="form-group"
        >
          <div class="col-sm-offset-2 col-sm-10">
            <label
              style={{
                fontFamily: "fantasy",
              }}
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="form-control"
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
          </div>
        </motion.div>
        <motion.div
          animate={{ scale: [0, 0.4, 0.8, 1] }}
          transition={{ times: [0, 0.1, 0.1, 1] }}
          class="form-group"
        >
          <div class="col-sm-offset-2 col-sm-10">
            <label
              style={{
                fontFamily: "fantasy",
              }}
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              onChange={handleOnChange}
              required
              value={inputs.message}
            />
          </div>
        </motion.div>
        <motion.div
          animate={{ scale: [0, 0.4, 0.8, 1] }}
          transition={{ times: [0, 0.1, 0.1, 1] }}
          class="form-group"
        >
          <div
            class="col-sm-offset-2 col-sm-10"
            style={{ alignContent: "end" }}
          >
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileFocus={{ scale: 2 }}
              type="submit"
              className="btn btn-secondary"
              disabled={status.submitting}
              style={{
                fontFamily: "fantasy",
                marginTop: "10px",
              }}
            >
              {!status.submitting
                ? !status.submitted
                  ? "Submit"
                  : "Submitted"
                : "Submitting..."}
            </motion.button>
          </div>
        </motion.div>
      </form>

      {status.info.error && (
        <motion.div animate={{ scale: [0, 5] }} className="error">
          Error: {status.info.msg}
        </motion.div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};
