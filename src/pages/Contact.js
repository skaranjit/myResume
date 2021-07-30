import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import {
  motion,
  motionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errors: {},
      setServerStatus: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }
  handleServerResponse(ok, msg) {
    let serverStatus = {};
    serverStatus["submitting"] = false;
    serverStatus["status"] = { ok, msg };

    this.setState({
      setServerStatus: serverStatus,
    });
    if (ok) {
      let inputs = {};
      inputs["email"] = "";
      inputs["message"] = "";
      inputs["name"] = "";
      this.setState({
        input: inputs,
      });
    }
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      let serverStatus = {};
      serverStatus["submitting"] = true;
      this.setState({
        setServerStatus: serverStatus,
      });
      axios({
        method: "POST",
        url: "https://formspree.io/f/xwkaqqeg",
        data: this.state.input,
      })
        .then((r) => {
          this.handleServerResponse(true, "Thank You! You message delivered.");
        })
        .catch((r) => {
          this.handleServerResponse(false, r.response.data.error);
        });
    }
  }
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (isValid) {
      errors["name"] = null;
      errors["email"] = null;
      errors["message"] = null;
    }
    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please verify your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please verify your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["message"]) {
      isValid = false;
      errors["message"] = "Please enter your message.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          top: 90,
          flex: 1,
          flexDirection: "column-reverse",
          justifyContent: "center",
          alignContent: "center",
          height: "100vh",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="name">Your Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter name"
              id="name"
            />

            <div className="text-danger">{this.state.errors.name}</div>
          </div>
          <div class="form-group">
            <label for="email">Your Email Address:</label>
            <input
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea
              name="message"
              value={this.state.input.message}
              onChange={this.handleChange}
              placeholder="Your message...."
              class="form-control"
            />

            <div className="text-danger">{this.state.errors.message}</div>
          </div>

          <button
            type="submit"
            value="Submit"
            class="btn btn-success"
            disabled={this.state.setServerStatus.submitting}
          >
            Submit
          </button>
          {this.state.setServerStatus.status && (
            <p
              className={
                !this.state.setServerStatus.status.ok ? "errorMsg" : ""
              }
            >
              {alert(this.state.setServerStatus.status.msg)}
            </p>
          )}
        </form>
      </div>
    );
  }
}
export default ContactForm;
// export default () => {
//   const [status, setStatus] = useState({
//     submitted: false,
//     submitting: false,
//     info: { error: false, msg: null },
//   });
//   const [inputs, setInputs] = useState({
//     email: "",
//     message: "",
//   });
//   const handleServerResponse = (ok, msg) => {
//     if (ok) {
//       setStatus({
//         submitted: true,
//         submitting: false,
//         info: { error: false, msg: msg },
//       });
//       setInputs({
//         email: "",
//         message: "",
//       });
//     } else {
//       setStatus({
//         info: { error: true, msg: msg },
//       });
//     }
//   };
//   const handleOnChange = (e) => {
//     e.persist();
//     setInputs((prev) => ({
//       ...prev,
//       [e.target.id]: e.target.value,
//     }));
//     setStatus({
//       submitted: false,
//       submitting: false,
//       info: { error: false, msg: null },
//     });
//   };
//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
//     axios({
//       method: "POST",
//       url: "https://formspree.io/f/xwkaqqeg",
//       data: inputs,
//     })
//       .then((response) => {
//         handleServerResponse(
//           true,
//           "Thank you, your message has been submitted."
//         );
//       })
//       .catch((error) => {
//         handleServerResponse(false, error.response.data.error);
//       });
//   };
//   return (
//     <main className="container " style={{ marginTop: "10vh" }}>
//       <h1>Connect With Me </h1>
//       <p style={{ fontFamily: "cursive", fontSize: "20px" }}>
//         {" "}
//         Send me a message and I will get back to you as soon as possible.
//       </p>
//       <hr />
//       <form onSubmit={handleOnSubmit}>
//         <motion.div
//           animate={{ scale: [0, 0.4, 0.8, 1] }}
//           transition={{ times: [0, 0.1, 0.1, 1] }}
//           className="form-group"
//         >
//           <div class="col-sm-offset-2 col-sm-10">
//             <label
//               for="name"
//               style={{
//                 fontFamily: "fantasy",
//               }}
//             >
//               Name
//             </label>
//             <input
//               className="form-control"
//               id="name"
//               type="text"
//               name="_name"
//               onChange={handleOnChange}
//               required
//               value={inputs.name}
//               width="20%"
//             />
//           </div>
//         </motion.div>
//         <motion.div
//           animate={{ scale: [0, 0.4, 0.8, 1] }}
//           transition={{ times: [0, 0.1, 0.1, 1] }}
//           class="form-group"
//         >
//           <div class="col-sm-offset-2 col-sm-10">
//             <label
//               style={{
//                 fontFamily: "fantasy",
//               }}
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               className="form-control"
//               id="email"
//               type="email"
//               name="_replyto"
//               onChange={handleOnChange}
//               required
//               value={inputs.email}
//             />
//           </div>
//         </motion.div>
//         <motion.div
//           animate={{ scale: [0, 0.4, 0.8, 1] }}
//           transition={{ times: [0, 0.1, 0.1, 1] }}
//           class="form-group"
//         >
//           <div class="col-sm-offset-2 col-sm-10">
//             <label
//               style={{
//                 fontFamily: "fantasy",
//               }}
//               htmlFor="message"
//             >
//               Message
//             </label>
//             <textarea
//               className="form-control"
//               id="message"
//               name="message"
//               onChange={handleOnChange}
//               required
//               value={inputs.message}
//             />
//           </div>
//         </motion.div>
//         <motion.div
//           animate={{ scale: [0, 0.4, 0.8, 1] }}
//           transition={{ times: [0, 0.1, 0.1, 1] }}
//           class="form-group"
//         >
//           <div
//             class="col-sm-offset-2 col-sm-10"
//             style={{ alignContent: "end" }}
//           >
//             <motion.button
//               whileHover={{ scale: 1.2 }}
//               whileFocus={{ scale: 2 }}
//               type="submit"
//               className="btn btn-secondary"
//               disabled={status.submitting}
//               style={{
//                 fontFamily: "fantasy",
//                 marginTop: "10px",
//               }}
//             >
//               {!status.submitting
//                 ? !status.submitted
//                   ? "Submit"
//                   : "Submitted"
//                 : "Submitting..."}
//             </motion.button>
//           </div>
//         </motion.div>
//       </form>

//       {status.info.error && (
//         <motion.div animate={{ scale: [0, 5] }} className="error">
//           Error: {status.info.msg}
//         </motion.div>
//       )}
//       {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
//     </main>
//   );
// };
