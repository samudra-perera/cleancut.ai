import styled from "styled-components";
import { media } from "../../../../style/media";
import { StyledHeading, StyledParagraph } from "../../CallToAction/styles/CTA.styled";

const CardContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  padding-bottom: 15rem;
  align-items: center;

  @media ${media.laptopLarge} {
    padding-bottom: 12rem;
  }

  @media ${media.laptop} {
    padding-bottom: 8rem;
  }

  @media ${media.tablet} {
    flex-direction: column;
    padding-bottom: 1rem;
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

  @media ${media.tablet} {
    border-radius: 2rem;
  }

  @media ${media.mobile} {
    border-radius: 1rem;
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
    margin: 2rem;
    align-items: center;
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
    text-align: center;
    margin-bottom: 0;
  }
`;

const TextSpan = styled.span`
  color: #4A01A4;
  font-family: Graphik-500;
`;

const TextParagraph = styled(StyledParagraph)`
  text-align: ${(props) => props.align || "justify"};
  margin: 1.5rem 0;
  width: 70%;
  font-family: Graphik-400;

  @media ${media.tablet} {
    text-align: center;
    margin: 1rem 0;
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

export {CardIframe, TextParagraph, TextSpan, TextHeading, TextContainer, GifContainer, CardContainer}