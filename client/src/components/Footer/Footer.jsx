import React from "react";
import {
  FooterContainer,
  FooterContentContainer,
  FooterHeading,
  FooterLink,
  FooterText,
  FooterInput,
  FooterForm,
  FooterLinksContainer,
  FooterNavLinks,
} from "./styles/Footer.styles";
import { jobs } from "./JobOpenings";
import Button from "../Button";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentContainer left={true}>
        <FooterHeading>Get Started</FooterHeading>
        <FooterText>
          We check all the boxes, ready to start your creative journey with
          CleanCut?
        </FooterText>
        <FooterForm>
          <FooterInput
            type="email"
            placeholder="Enter your email"
          ></FooterInput>
          <Button text={"Start Free Trial"} />
        </FooterForm>
        <FooterLinksContainer>
          <FooterNavLinks href="#">Support</FooterNavLinks>
          <FooterNavLinks href="#">Testimonials</FooterNavLinks>
          <FooterNavLinks href="#">FAQs</FooterNavLinks>
          <FooterNavLinks href="#">Careers</FooterNavLinks>
        </FooterLinksContainer>
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
