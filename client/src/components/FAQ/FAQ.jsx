import React from "react";
import {
  StyledContainer,
} from "../CallToAction/styles/CTA.styled";
import { FAQContainer, FAQLink, FAQHeading } from "./styles/FAQ.styles";
import { QnA } from "./Questions";
import FAQDropDown from "./FAQDropDown";

const FAQ = () => {
  return (
    <>
      <FAQContainer>
        <StyledContainer>
          <FAQHeading>FAQs</FAQHeading>
          {
            QnA.map((question, index) => {
                return <FAQDropDown question={question} key={index}/>
            })
          }
          <FAQLink>To learn more about Cleancut {">"}</FAQLink>
        </StyledContainer>
      </FAQContainer>
    </>
  );
};

export default FAQ;
