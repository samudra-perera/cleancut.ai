import React, { useState } from "react";
import styled from "styled-components";
import { StyledParagraph } from "../CallToAction/styles/CTA.styled";

const DropDownTitle = styled(StyledParagraph)`
    border-bottom: 1px solid black;
    padding-bottom: 2rem;
    cursor: pointer;
    
`;


const FAQDropDown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { question } = props;
  console.log(question);
  return (
    <>
      <DropDownTitle onClick={() => setIsActive(!isActive)}>{question.question}</DropDownTitle>
      {/* <p>{question.answer}</p> */}
    </>
  );
};

export default FAQDropDown;
