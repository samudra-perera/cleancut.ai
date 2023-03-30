import styled from "styled-components";
import { media } from "../../../../style/media";

const StyledImage = styled.img`
  flex-grow: 5;
  max-height: 800px;
  max-width: 800px;
  @media ${media.laptopLarge} {
    height: auto;
    width: 65%;
    margin: 3rem 0;
  }

  @media ${media.laptop} {
    height: auto;
    width: 50%;
  }

  @media ${media.tablet} {
    margin-bottom: 0;
    height: 50%;
    width: auto;
  }

  @media ${media.mobile} {
    height: 30%;
    width: auto;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  margin: 7rem 6rem;

  @media ${media.laptopLarge} {
    justify-content: center;
    margin: 3rem 4rem;
  }

  @media ${media.tablet} {
    align-items: center;
    margin-top: 1rem;
  }

  @media ${media.mobile} {
    margin-top: 0;
  }
`;

const StyledHeading = styled.h1`
  font-family: Graphik-700;
  font-size: 4.5rem;
  margin: 0.8rem 0;

  @media ${media.laptopLarge} {
    font-size: 3.2rem;
    margin: 0.5rem 0;
  }

  @media ${media.mobile} {
    font-size: 2.5rem;
  }
`;

const StyledParagraph = styled.p`
  font-family: Graphik-300;
  font-size: 1.1rem;
  margin: 1rem 6rem 1rem 0rem;
  color: #03004e;

  @media ${media.laptopLarge} {
    font-size: 0.9rem;
  }

  @media ${media.tablet} {
    text-align: center;
    margin: 0.5rem;
  }
`;

const StyledLink = styled.a`
  font-weight: bold;
  color: #03004e;
  cursor: pointer;
  text-decoration: underline;
`;

//Button Styling
const StyledButton = styled.div`
  color: #03004e;
  background-color: #e7e6fd;
  padding: 0rem 0.5rem 0rem 0.15rem;
  border-radius: 2rem;
  display: flex;
  height: fit-content;
  width: fit-content;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  border: #03004e 1px solid;
  overflow-x: hidden;
  margin-top: 4rem;
`;

//These Divs are seperating the text and the button SVG
const PlayButton = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
  cursor: pointer;
`;

const ButtonText = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  margin: 0;
`;

const CTAButton = styled.a`
  background-color: #f8705d;
  font-size: 0.8rem;
  padding: 0.6rem 2rem;
  color: white;
  text-decoration: none;
  border-radius: 2rem;
  font-family: Graphik-500;
  margin-top: .5rem;
  display: none;

  @media ${media.tablet} {
    display: block;
  }
`;

//Styling for the Iframe toggled component
const StyledIFrame = styled.iframe`
  width: 100vw;
  background-color: black;
  height: 100vh;
`;

export {
  StyledImage,
  StyledContainer,
  StyledHeading,
  StyledParagraph,
  StyledLink,
  StyledButton,
  ButtonText,
  PlayButton,
  StyledIFrame,
  CTAButton,
};
