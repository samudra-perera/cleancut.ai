import React from "react";
import {
  FooterHeading,
  FooterText,
  FooterLink,
  FooterContentContainer,
} from "../styles/Footer.styles";
import { jobs } from "./JobOpenings";

const HomeFooter = () => {
  return (
    <FooterContentContainer>
      <FooterHeading>Join our team</FooterHeading>
      <FooterText>
        We're looking for AI/ML and computer vision engineers who want to make
        an impact on storytelling, together.
      </FooterText>
      {jobs.map((job, index) => {
        return (
          <FooterLink href={job.url} key={index}>
            {job.title}
          </FooterLink>
        );
      })}
    </FooterContentContainer>
  );
};

export default HomeFooter;
