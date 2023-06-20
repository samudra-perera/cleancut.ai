import React from "react";
import {
  FooterContainer,
  FooterContentContainer,
  FooterText,
  FooterLogo,
  FooterContainerContainer,
} from "./styles/Footer.styles";

const Footer = ({element}) => {
  //The element prop takes in the react component and renders it with another FooterContentContainer
  return (
    <FooterContainerContainer>
      <FooterContainer>
        <FooterContentContainer left={true}>
          <FooterLogo alt="footer-logo" src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1680553851/CleancutAssets/cleancut_logo_lxt0hp.png" />
          <FooterText>© 2023 Cleancut Inc. All rights reserved</FooterText>
        </FooterContentContainer>
        {element}
      </FooterContainer>
    </FooterContainerContainer>
  );
};

export default Footer;
