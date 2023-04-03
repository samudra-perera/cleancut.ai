import React from "react";
import {
  FooterContainer,
  FooterContentContainer,
  FooterHeading,
  FooterLink,
  FooterText,
  FooterLogo
} from "./styles/Footer.styles";
import { jobs } from "./JobOpenings";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentContainer left={true}>
        <FooterLogo src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1680553851/CleancutAssets/cleancut_logo_lxt0hp.png"/>
        <FooterText>© 2023 CleanCut Inc. All rights reserved</FooterText>
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
