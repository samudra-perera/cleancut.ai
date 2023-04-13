import React from "react";
import {
  FooterContainer,
  FooterContentContainer,
  FooterText,
  FooterLogo,
} from "./styles/Footer.styles";

const Footer = (props) => {
  //The element prop takes in the react component and renders it with another FooterContentContainer
  const { element } = props;
  return (
    <FooterContainer>
      <FooterContentContainer left={true}>
        <FooterLogo src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1680553851/CleancutAssets/cleancut_logo_lxt0hp.png" />
        <FooterText>© 2023 CleanCut Inc. All rights reserved</FooterText>
      </FooterContentContainer>
      {element}
    </FooterContainer>
  );
};

export default Footer;
