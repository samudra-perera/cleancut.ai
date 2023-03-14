import React from "react";
import styled from "styled-components";
import {
  StyledContainer,
  StyledHeading,
  StyledImage,
  StyledLink,
  StyledParagraph,
} from "./styles/CTA.styled";

//CTA Containter Div
const CTA = styled.div`
  font-family: Graphik;
  height: 100vh;
  background-color: #e7e6fd;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #03004e;
`;

const CallToAction = () => {
  return (
    <CTA>
      <StyledContainer>
        <StyledHeading>Less Editing.</StyledHeading>
        <StyledHeading>More Story.</StyledHeading>
        <StyledParagraph>
          Let Spingle (our AI) watch your footage and separate the good from the
          shaky.
        </StyledParagraph>
        <StyledParagraph>
          Get access to the beta through our{" "}
          <StyledLink>Early Adopter Program</StyledLink>
        </StyledParagraph>
      </StyledContainer>
      <StyledImage
        src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1678816665/spinle_CTA_k0bomc.png"
        alt="Image of Spingle"
      />
    </CTA>
  );
};

export default CallToAction;
