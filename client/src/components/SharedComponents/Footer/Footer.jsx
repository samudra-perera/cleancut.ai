import React from "react";
import {
  FooterContainer,
  FooterContentContainer,
  FooterHeading,
  FooterLink,
  FooterText,
  FooterLogo
} from "./styles/Footer.styles";
import { jobs } from "./Home/JobOpenings";

const Footer = (props) => {
  const {element} = props;
  return (
    <FooterContainer>
      <FooterContentContainer left={true}>
        <FooterLogo src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1680553851/CleancutAssets/cleancut_logo_lxt0hp.png"/>
        <FooterText>© 2023 CleanCut Inc. All rights reserved</FooterText>
      </FooterContentContainer>
      <FooterContentContainer>
        {element}
      </FooterContentContainer>
    </FooterContainer>
  );
};

export default Footer;
