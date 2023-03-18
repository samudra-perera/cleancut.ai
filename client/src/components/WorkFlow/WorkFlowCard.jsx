import React from "react";
import styled from "styled-components";
import { StyledHeading } from "../CallToAction/styles/CTA.styled";

const CardContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  margin: 2rem 0;
`;

const GifContainer = styled.div`
  background-color: white;
  flex-grow: 1;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: ${props => props.align || 'flex-start'};
  ;
`;
const TextHeading = styled(StyledHeading)`
font-weight: 600;
color: #03004E;
line-height: 1.2;
text-align: ${props => props.align || 'justify'};
`

const TextSpan = styled.span`
color: #FF6753;
font-weight: 500;
`

const WorkFlowCard = (props) => {
  const { heading, direction, step, align, alignItems } = props;

  return (
    <CardContainer direction={direction}>
      <GifContainer></GifContainer>
      <TextContainer align={alignItems}>
        <TextSpan>{step}</TextSpan>
        <TextHeading align={align}>{heading}</TextHeading>
      </TextContainer>
    </CardContainer>
  );
};

export default WorkFlowCard;
