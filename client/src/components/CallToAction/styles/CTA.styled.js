import styled from "styled-components";

const StyledImage = styled.img`
  flex-grow: 5;
  height: auto;
  width: auto;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  margin: 7rem 6rem;
`;
const StyledHeading = styled.h1`
  font-size: 4.5rem;
  margin: .8rem 0;
  font-weight: 700;
`;

const StyledParagraph = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  margin: 1rem 6rem 1rem 0rem;
  color: #03004E;
`;

const StyledLink = styled.a`
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

//Styling for the Iframe toggled component
const StyledIFrame = styled.video`

`


export {
  StyledImage,
  StyledContainer,
  StyledHeading,
  StyledParagraph,
  StyledLink,
  StyledButton,
  ButtonText,
  PlayButton,
};
