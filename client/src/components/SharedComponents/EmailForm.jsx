import React from "react";
import styled from "styled-components";
import Button from "./Button";

const EmailInput = styled.input`
  width: 250px;
  font-family: Graphik-300;
  font-size: 1rem;
  border: none;
  border-radius: 2rem 0 0 2rem;
  position: relative;
  padding-left: .7rem;
  :focus {
    outline: none;
  }
`;

const FooterForm = styled.form`
  display: flex;
  flex-direction: row;
  border: 0.5px solid #943CFF;
  width: fit-content;
  padding: 0.1rem;
  border-radius: 2rem;
  background-color: white;
`;

const StyledButton = styled.button`
  background-color: #943CFF;
  font-size: .8rem;
  padding: .6rem 2rem;
  color: white;
  text-decoration: none;
  border-radius: 2rem;
  font-family: Graphik-500;
  cursor: pointer;
  border: none;
`;


const EmailForm = () => {
  return (
    <>
      <FooterForm>
        <EmailInput type='email' placeholder='Enter your email'></EmailInput>
        <StyledButton>Start Free Trial</StyledButton>
      </FooterForm>
    </>
  );
};

export default EmailForm;
