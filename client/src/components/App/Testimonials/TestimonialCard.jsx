import React from "react";
import {
  CardBorder,
  CardQuote,
  AvatarContainer,
  Avatar,
  AvatarTextContainer,
  AvatarName,
  AvatarSpan,
  CardContainer,
} from "./style/TestimonialCard.style";

const TestimonialCard = (props) => {
  const { name, span, quote, avatarURL } = props;
  return (
    <CardBorder>
      <CardContainer>
        <CardQuote>{quote}</CardQuote>
        <AvatarContainer>
          <Avatar src={avatarURL} />
          <AvatarTextContainer>
            <AvatarName>{name}</AvatarName>
            {span.map((span, index) => {
              return <AvatarSpan key={index}>{span}</AvatarSpan>;
            })}
          </AvatarTextContainer>
        </AvatarContainer>
      </CardContainer>
    </CardBorder>
  );
};

export default TestimonialCard;
