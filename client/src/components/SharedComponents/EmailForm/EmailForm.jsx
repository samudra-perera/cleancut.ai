import React, { useState } from "react";
import { MailForm, EmailInput, StyledButton } from "./style/EmailForm.style";
import DOMPurify from 'dompurify';

const EmailForm = ({ colour, responsive, status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  //Handling the Form Submission
  const handleSubmission = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });
    //On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  //Handle the Input Key Event
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleSubmission();
    }
  };

  const sanitize = ( content ) => {
    return process.browser ? DOMPurify.sanitize( content ) : content;
  };
  

  // Extract Message from the string
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <>
      <MailForm
        action=""
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_self"
        colour={colour}
        responsive={responsive}
      >
        <EmailInput type="email" placeholder="Enter your email"></EmailInput>
        <StyledButton colour={colour}>Start Free Trial</StyledButton>
      </MailForm>
    </>
  );
};

export default EmailForm;
