import styled from "styled-components";
import { media } from "../../../../style/media";
import {
  StyledHeading,
  StyledParagraph,
} from "../../CallToAction/styles/CTA.styled";

const CardContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  padding-bottom: 15rem;
  align-items: center;

  @media ${media.laptopLarge} {
    padding-bottom: 12rem;
  }

  @media ${media.tablet} {
    flex-wrap: wrap;
    padding-bottom: 4rem;
  }
`;

const GifContainer = styled.div`
  background-color: white;
  flex-grow: 1;
  border-radius: ${(props) => props.borderRadius || `0rem`};
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  z-index: 2;

  @media (min-width: 1800px) {
    border-radius: 2rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: ${(props) => props.align || "flex-start"};
  margin: 7rem;
  justify-content: center;
  flex-grow: 1;

  @media ${media.laptop} {
    margin: 5rem;
  }

  @media ${media.tablet} {
    margin: 5rem 2rem 4rem;
    width: 100%;
  }
`;
const TextHeading = styled(StyledHeading)`
  font-family: Graphik-500;
  width: 100%;
  line-height: 1.2;
  font-size: 3.5rem;
  text-align: ${(props) => props.align || "justify"};

  @media ${media.laptop} {
    font-size: 2.5rem;
  }

  @media ${media.tablet} {
    margin-bottom: 0;
  }
`;

const TextSpan = styled.span`
  color: #4a01a4;
  font-family: Graphik-500;
  margin-bottom: ${props => props.marginBottom || 0};
`;

const TextParagraph = styled(StyledParagraph)`
  text-align: ${(props) => props.align || "justify"};
  margin: 1.5rem 0;
  width: 70%;
  line-height: 1.7rem;
  font-family: Graphik-400;

  @media ${media.tablet} {
    margin: 1rem 0;
    width: 50%;
    line-height: 1.5rem;
  }

  @media ${media.mobile} {
    width: 70%;
  }
`;

const CardIframe = styled.img`
  border: none;
  height: 500px;
  width: auto;
  padding: 1.5rem;

  @media ${media.laptopLarge} {
    height: 450px;
  }

  @media ${media.laptop} {
    height: 350px;
  }

  @media ${media.tablet} {
    height: 310px;
  }

  @media ${media.mobile} {
    height: 220px;
    padding: 1rem;
  }
`;

const MediaContainer = styled.div`
  position: relative;
  display: flex;

  @media ${media.tablet} {
    flex-grow: 0;
  }
`;
const SecondaryBackgroundLeft = styled.div`
  position: absolute;
  width: 95%;
  height: 620px;
  border-radius: ${(props) => props.borderRadius};
  background-color: #f8705c;
  left: 0;
  top: -7%;

  @media (min-width: 1800px) {
    left: -100px;
    border-radius: 2rem;
  }

  @media ${media.laptopLarge} {
    height: 570px;
  }

  @media ${media.laptop} {
    height: 450px;
  }

  @media ${media.tablet} {
    height: 410px;
    width: 410px;
  }

  @media ${media.mobile} {
    height: 290px;
    width: 290px;
  }
`;

const SecondaryBackgroundRight = styled.div`
  position: absolute;
  width: 95%;
  height: 620px;
  border-radius: ${(props) => props.borderRadius};
  background-color: #f8705c;
  right: 0;
  top: -7%;

  @media (min-width: 1800px) {
    right: -100px;
    border-radius: 2rem;
  }

  @media ${media.laptopLarge} {
    height: 570px;
  }

  @media ${media.laptop} {
    height: 450px;
  }

  @media ${media.tablet} {
    height: 410px;
    width: 410px;
  }

  @media ${media.mobile} {
    height: 290px;
    width: 290px;
  }
`;

export {
  CardIframe,
  TextParagraph,
  TextSpan,
  TextHeading,
  TextContainer,
  GifContainer,
  CardContainer,
  MediaContainer,
  SecondaryBackgroundLeft,
  SecondaryBackgroundRight
};
