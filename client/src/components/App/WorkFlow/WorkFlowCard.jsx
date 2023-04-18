import React from "react";
import {
  CardIframe,
  TextParagraph,
  TextSpan,
  TextHeading,
  TextContainer,
  GifContainer,
  CardContainer,
  MediaContainer,
  SecondaryBackgroundLeft,
  SecondaryBackgroundRight,
} from "./styles/WorkFlowCard.styles";
import SoftwareSection from "./SoftwareSection";

const WorkFlowCard = ({
  heading,
  direction,
  step,
  align,
  alignItems,
  explanation,
  borderRadius,
  gifLink,
  marginBottom,
}) => {
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
        <TextSpan marginBottom={marginBottom}>{step}</TextSpan>
        <TextHeading align={align}>{heading}</TextHeading>
        <TextParagraph align={align}>{explanation}</TextParagraph>
        {step === "01" ? <SoftwareSection/> : <></>}
      </TextContainer>
    </CardContainer>
  );
};

export default WorkFlowCard;
