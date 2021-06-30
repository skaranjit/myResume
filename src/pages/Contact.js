import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xwkaqqeg");
  if (state.succeeded) {
    return (
      <div className="container   bg-light" style={{ padding: "5rem" }}>
        {" "}
        <p className="display-3">Thank you for contacting me!</p>
        <p> I will get back to you as soon as possible.</p>
      </div>
    );
  }
  return (
    <div className="container   bg-light" style={{ padding: "5rem" }}>
      <form onSubmit={handleSubmit}>
        <div class="col-md-4">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            className="form-control"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className="invalid-feedback">Invalid Email Address!</div>
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div class="mb-3">
          {" "}
          <label className="form-label" htmlFor="validationTextarea">
            Your Message
          </label>
          <textarea
            className="form-control is-invalid"
            id="validationTextarea"
            name="message"
            required
          />
          <div class="invalid-feedback">
            Please enter a message in the textarea.
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            className="valid-feedback"
            errors={state.errors}
          />
        </div>

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
