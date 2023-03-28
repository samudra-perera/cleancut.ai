import React from "react";
import {
  FooterContainer,
  FooterContentContainer,
  FooterHeading,
  FooterLink,
  FooterText,
} from "./styles/Footer.styles";
import { jobs } from "./JobOpenings";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentContainer left={true}>

      </FooterContentContainer>
      <FooterContentContainer>
        <FooterHeading>Join our team</FooterHeading>
        <FooterText size={"2"}>
          We're looking for creative engineers, designers, and filmmakers who
          want to change the way video is made, together.
        </FooterText>
        {jobs.map((job, index) => {
          return (
            <FooterLink href={job.url} key={index}>
              {job.title}
            </FooterLink>
          );
        })}
      </FooterContentContainer>
    </FooterContainer>
  );
};

export default Footer;
