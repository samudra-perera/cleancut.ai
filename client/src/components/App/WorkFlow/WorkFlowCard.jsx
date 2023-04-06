import React from "react";
import styled from "styled-components";
import {
  CardIframe,
  TextParagraph,
  TextSpan,
  TextHeading,
  TextContainer,
  GifContainer,
  CardContainer,
} from "./styles/WorkFlowCard.styles";

import { media } from "../../../style/media";

const MediaContainer = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
`;
const SecondaryBackgroundLeft = styled.div`
  position: absolute;
  width: 95%;
  height: 620px;
  border-radius: ${(props) => props.borderRadius};
  background-color: #f8705c;
  left: 0;
  top: -7%;

  @media ${media.laptopLarge} {
    height: 570px;
  }

  @media ${media.laptop} {
    height: 450px;
  }

  @media ${media.tablet} {
    display: none;
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

  @media ${media.laptopLarge} {
    height: 570px;
  }

  @media ${media.laptop} {
    height: 450px;
  }

  @media ${media.tablet} {
    display: none;
  }
`;

const WorkFlowCard = (props) => {
  const {
    heading,
    direction,
    step,
    align,
    alignItems,
    explanation,
    borderRadius,
    gifLink,
  } = props;

  return (
    <CardContainer direction={direction}>
      <MediaContainer>
        {align === "right" ? (
          <SecondaryBackgroundLeft borderRadius={borderRadius} />
        ) : (
          <SecondaryBackgroundRight borderRadius={borderRadius} />
        )}
        <GifContainer borderRadius={borderRadius}>
          <CardIframe src={gifLink} />
        </GifContainer>
      </MediaContainer>
      <TextContainer align={alignItems}>
        <TextSpan>{step}</TextSpan>
        <TextHeading align={align}>{heading}</TextHeading>
        <TextParagraph align={align}>{explanation}</TextParagraph>
      </TextContainer>
    </CardContainer>
  );
};

export default WorkFlowCard;
