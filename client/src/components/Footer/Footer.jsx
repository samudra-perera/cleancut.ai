import React from "react";
import {
  FooterContainer,
  FooterContentContainer,
  FooterHeading,
  FooterText,
} from "./styles/Footer.styles";
import { jobs } from "./JobOpenings";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentContainer left={true}>
        <FooterHeading>Get Started</FooterHeading>
        <FooterText>
          We check all the boxes, ready to start your creative journey with
          CleanCut.
        </FooterText>
      </FooterContentContainer>
      <FooterContentContainer>
        <FooterHeading>Join our team</FooterHeading>
        <FooterText>
          We're looking for creative engineers, designers, and filmmakers who
          want to change the way video is made, together.
        </FooterText>
        {
            jobs.map((job) => {
                return <>1</>
            })
        }
      </FooterContentContainer>
    </FooterContainer>
  );
};

export default Footer;
