import React, { useState } from "react";
import styled from "styled-components";
import {
  StyledContainer,
  StyledHeading,
  StyledImage,
  StyledLink,
  StyledParagraph,
  StyledButton,
  ButtonText,
  PlayButton,
  StyledIFrame
} from "./styles/CTA.styled";
import { AiFillPlayCircle } from "react-icons/ai";

//CTA Containter Div
const CTA = styled.div`
  font-family: Graphik;
  height: 100vh;
  background-color: #e7e6fd;
  display: flex;
  flex-direction: row;
  color: #03004e;
  overflow: hidden;
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
          <StyledButton onClick={() => setToggle(!toggle)}>
            <PlayButton>
              <AiFillPlayCircle size="45px" />
            </PlayButton>
            <PlayButton>
              <ButtonText>Watch the Trailer</ButtonText>
            </PlayButton>
          </StyledButton>
        </StyledContainer>
        <StyledImage
          src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1678816665/spinle_CTA_k0bomc.png"
          alt="Image of Spingle"
        />
      </CTA>
      {toggle && <StyledIFrame src="https://player.vimeo.com/video/746949070?h=37cdccfb3b"></StyledIFrame>}
    </>
  );
};

export default CallToAction;

{/* <iframe src="https://player.vimeo.com/video/746949070?h=37cdccfb3b" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/746949070">RBC, TIFF &#039;Growing Together&#039;</a> from <a href="https://vimeo.com/liamhiggins">Liam Higgins</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}