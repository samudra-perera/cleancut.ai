import React from "react";
import styled from "styled-components";
import { media } from "../../style/media";
import {
  StyledHeading,
  StyledLink,
  StyledParagraph,
} from "../CallToAction/styles/CTA.styled";

const CardContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  padding-bottom: 10rem;
`;

const GifContainer = styled.div`
  background-color: white;
  flex-grow: 1;
  border-radius: ${(props) => props.borderRadius || `0rem`};
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: ${(props) => props.align || "flex-start"};
  margin: 7rem; ;
  justify-content: center;
  flex-grow: 1;
`;
const TextHeading = styled(StyledHeading)`
  font-family: Graphik-600;
  color: #03004e;
  line-height: 1.2;
  text-align: ${(props) => props.align || "justify"};
`;

const TextSpan = styled.span`
  color: #ff6753;
  font-family: Graphik-500;
`;

const TextParagraph = styled(StyledParagraph)`
  text-align: ${(props) => props.align || "justify"};
  margin: 1.5rem 0;
  width: 70%;
  font-family: Graphik-300;
`;

const TextLink = styled(StyledLink)`
  margin-top: 2rem;
`
const CardIframe = styled.img`
  border: none;
  height: 600px;
  width: auto;
  padding: 1.5rem;

  @media ${media.laptopLarge} {
    height: 500px;
  }

  @media ${media.laptop} {
    height: 400px;
  }
`

const WorkFlowCard = (props) => {
  const { heading, direction, step, align, alignItems, explanation, borderRadius, gifLink } = props;

  return (
    <CardContainer direction={direction}>
      <GifContainer borderRadius={borderRadius}>
      <CardIframe src={gifLink}/>
      </GifContainer>
      <TextContainer align={alignItems}>
        <TextSpan>{step}</TextSpan>
        <TextHeading align={align}>{heading}</TextHeading>
        <TextParagraph align={align}>{explanation}</TextParagraph>
        {
          step === '03' ? <TextLink href="#">Learn More {'>'}</TextLink> : <></>
        }
      </TextContainer>
    </CardContainer>
  );
};

export default WorkFlowCard;
