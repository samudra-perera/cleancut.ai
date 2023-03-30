//When the trailer is released we can uncomment the code and link the vimeo file to the trailer
//Add Second call to action button for signup when mobile

import React, { useState } from "react";
import styled from "styled-components";
import { media } from "../../../style/media";
import Button from "../../SharedComponents/Button";
import {
  CTAButton,
  StyledContainer,
  StyledHeading,
  StyledImage,
  StyledLink,
  StyledParagraph,
  // StyledButton,
  // ButtonText,
  // PlayButton,
  // StyledIFrame
} from "./styles/CTA.styled";
// import { AiFillPlayCircle } from "react-icons/ai";

//CTA Containter Div
const CTA = styled.div`
  height: 100vh;
  background-color: #e7e6fd;
  display: flex;
  flex-direction: row;
  color: #03004e;
  overflow: hidden;
  align-items: center;

  @media ${media.tablet} {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const CallToAction = () => {
  //State to Toggle the trailer div
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <CTA>
        <StyledContainer>
          <StyledHeading>Less Editing.</StyledHeading>
          <StyledHeading>More Story.</StyledHeading>
          <StyledParagraph>
            Let Spingle (our AI) watch your footage and separate the good from
            the shaky.
          </StyledParagraph>
          <StyledParagraph>
            Get access to the beta through our{" "}
            <StyledLink href="https://www.google.com">
              Early Adopter Program
            </StyledLink>
          </StyledParagraph>
          {/* <StyledButton onClick={() => setToggle(!toggle)}>
            <PlayButton>
              <AiFillPlayCircle size="45px" />
            </PlayButton>
            <PlayButton>
              <ButtonText>Watch the Trailer</ButtonText>
            </PlayButton>
          </StyledButton> */}
          <CTAButton>Start Free Trial</CTAButton>
        </StyledContainer>
        <StyledImage
          src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1678816665/spinle_CTA_k0bomc.png"
          alt="Image of Spingle"
        />
      </CTA>
      {/* {toggle && <StyledIFrame src="https://player.vimeo.com/video/746949070?h=37cdccfb3b"></StyledIFrame>} */}
    </>
  );
};

export default CallToAction;
