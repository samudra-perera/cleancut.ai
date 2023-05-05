import React, { useState } from "react";
import {
  MailForm,
  EmailInput,
  StyledButton,
  ResponseMessage,
} from "./style/EmailForm.style";

const EmailForm = ({ colour, responsive, status, message, onValidated, hoverColour }) => {
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
  const handleInputKeyEvent = (e) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (e.keyCode === 13) {
      // Cancel the default action, if needed
      e.preventDefault();
      // Trigger the button element with a click
      handleSubmission();
    }
  };

  // Extract Message from the string and clean the status code
  const getMessage = (message) => {
    if (!message) {
      return null;
    }

    return message.slice(3);
  };

  const replyMessage = getMessage(message);

  return (
    <>
      <MailForm colour={colour} responsive={responsive}>
        <EmailInput
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value ?? " ")}
          onKeyUp={(e) => handleInputKeyEvent(e)}
        ></EmailInput>
        <StyledButton colour={colour} hoverColour={hoverColour} onClick={handleSubmission}>
          Start Free Trial
        </StyledButton>
      </MailForm>
      {status === "success" ? (
        <ResponseMessage responsive={responsive}>{message}</ResponseMessage>
      ) : null}
      {status === "error" && error == null ? (
        <ResponseMessage responsive={responsive}>{replyMessage}</ResponseMessage>
      ) : null}
      {error !== null ? <ResponseMessage responsive={responsive}>{error}</ResponseMessage> : null}
    </>
  );
};

export default EmailForm;
