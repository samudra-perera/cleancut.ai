import React from "react";
import styled from "styled-components";
import Button from "../../Button";
import { media } from "../../../../style/media";
import { FooterContentContainer } from "../styles/Footer.styles";

const AboutFooterHeading = styled.h4`
  font-family: Graphik-400;
  font-size: 2rem;
  width: 70%;
  margin-top: 0;
  margin-bottom: 1rem;

  @media ${media.laptopLarge} {
    font-size: 1.7rem;
  }

  @media ${media.laptop} {
    font-size: 1.5rem;
  }

  @media ${media.tablet} {
    font-size: 1.2rem;
  }

  @media ${media.mobile} {
    width: 100%;
  }
`;

const AboutFooterText = styled.p`
  font-family: Graphik-400;
  font-size: 1rem;
  width: 60%;
  margin-bottom: 2rem;

  @media ${media.laptop} {
    margin-bottom: 1.5rem;
  }

  @media ${media.tablet} {
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }

  @media ${media.mobile} {
    width: 100%;
  }
`;

const AboutContentContainer = styled(FooterContentContainer)`

`

const AboutFooter = () => {
  return (
    <AboutContentContainer>
      <AboutFooterHeading>
        Meet Spingle, your personal AI assistant
      </AboutFooterHeading>
      <AboutFooterText>
        What took hours is now completed in minutes.
      </AboutFooterText>
      <Button text={"Start Free Trial"} width={"20%"} padding={".9rem 2rem"} />
    </AboutContentContainer>
  );
};

export default AboutFooter;
