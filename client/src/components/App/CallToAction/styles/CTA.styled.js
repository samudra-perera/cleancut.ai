import styled from "styled-components";
import { media } from "../../../../style/media";

const StyledImage = styled.img`
  flex-grow: 5;
  max-height: 750px;
  max-width: 750px;
  @media ${media.laptopLarge} {
    height: auto;
    width: 50%;
    margin: 3rem 0;
  }

  @media ${media.tablet} {
    margin-bottom: 0;
    width: 60%;
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

const StyledCTAContainer = styled(StyledContainer)`
height: 60%;

@media ${media.laptopLarge} {
  margin: 3rem 0rem 3rem 4rem;
}

@media ${media.tablet} {
  margin: 3rem;
  margin-top: 1.5rem;
  align-items: baseline;
}

`

const StyledHeading = styled.h1`
  font-family: Graphik-700;
  font-size: 4.2rem;
  margin: 0rem 0;
  color: #121212;
  line-height: 5.5rem;

  @media ${media.laptopLarge} {
    font-size: 4rem;
    width: 100%;
    line-height: 4.5rem;
  }

  @media ${media.laptop} {
    font-size: 3.5rem;
    line-height: 4rem;
  }

  @media ${media.tablet} {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  @media ${media.mobile} {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const CTAHeading = styled(StyledHeading)`
  padding-bottom: 3rem;

  @media ${media.laptopLarge} {
    padding-bottom: 2rem;
  }

  @media ${media.tablet} {
    padding-bottom: 1rem;
  }

`


const StyledParagraph = styled.p`
  font-family: Graphik-300;
  font-size: 1.1rem;
  margin: 1rem 6rem 1rem 0rem;
  color: #222222;

  @media ${media.laptopLarge} {
    font-size: 0.9rem;
  }

  
  @media ${media.tablet} {
    margin: 0.5rem;
  }
`;

const CTAParagraph = styled(StyledParagraph)`
padding-bottom: 4rem;

@media ${media.laptopLarge} {
  padding-bottom: 2rem;
  font-size: 1rem;
}

@media ${media.laptop} {
  margin: 0;
}

@media ${media.tablet} {
  padding-bottom: 1rem;
}

@media ${media.mobile} {
  padding-bottom: .5rem;
  width: 70%;
}

`

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
  background-color: ${props => props.colour ||'#721ED8'};
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
  StyledCTAContainer,
  StyledContainer,
  StyledHeading,
  CTAHeading,
  CTAParagraph,
  StyledParagraph,
  StyledLink,
  StyledButton,
  ButtonText,
  PlayButton,
  StyledIFrame,
  CTAButton,
};
