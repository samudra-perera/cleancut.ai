import React from "react";
import styled from "styled-components";
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
  border-bottom-right-radius: 3rem;
  border-top-right-radius: 3rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: ${(props) => props.align || "flex-start"};
  margin: 7rem; ;
`;
const TextHeading = styled(StyledHeading)`
  font-weight: 600;
  color: #03004e;
  line-height: 1.2;
  text-align: ${(props) => props.align || "justify"};
`;

const TextSpan = styled.span`
  color: #ff6753;
  font-weight: 500;
`;

const TextParagraph = styled(StyledParagraph)`
  text-align: ${(props) => props.align || "justify"};
  margin: 1.5rem 0;
  width: 70%;
`;

const TextLink = styled(StyledLink)`
  margin-top: 2rem;
`

const WorkFlowCard = (props) => {
  const { heading, direction, step, align, alignItems, explanation, } = props;

  return (
    <CardContainer direction={direction}>
      <GifContainer></GifContainer>
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
