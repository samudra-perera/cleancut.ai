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
      <FooterText size={"2"}>
        We're looking for creative engineers, designers, and filmmakers who want
        to change the way video is made, together.
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
