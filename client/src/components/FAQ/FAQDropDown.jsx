import React, { useState } from "react";
import styled from "styled-components";
import { StyledParagraph } from "../CallToAction/styles/CTA.styled";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const DropDownTitle = styled(StyledParagraph)`
  padding-bottom: 0.5rem;
  cursor: pointer;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DropDownContainer = styled.div`
  padding-top: 1.5rem;
  cursor: pointer;
  border-bottom: 1px solid black;
`;
//Need to add a transition for the opening and closing of the border bottom
const AnswerDropDown = styled(StyledParagraph)`
`;
//

const FAQDropDown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { question } = props;

  return (
    <>
      <DropDownContainer onClick={() => setIsActive(!isActive)}>
        <QuestionContainer>
          <DropDownTitle open={isActive}>{question.question}</DropDownTitle>
          {isActive ? <HiChevronUp /> : <HiChevronDown />}
        </QuestionContainer>

        {isActive && (
          <AnswerDropDown open={isActive}>{question.answer}</AnswerDropDown>
        )}
      </DropDownContainer>
    </>
  );
};

export default FAQDropDown;
