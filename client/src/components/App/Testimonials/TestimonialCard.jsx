import React from 'react'
import { CardContainer, CardQuote, AvatarContainer, Avatar, AvatarTextContainer, AvatarName, AvatarSpan } from './style/TestimonialCard.style'


const TestimonialCard = (props) => {
    const {name, span, quote, avatarURL  } = props
  return (
    <CardContainer>
        <CardQuote>{quote}</CardQuote>
        <AvatarContainer>
            <Avatar src={avatarURL}/>
            <AvatarTextContainer>
                <AvatarName>{name}</AvatarName>
                <AvatarSpan>{span}</AvatarSpan>
            </AvatarTextContainer>
        </AvatarContainer>
    </CardContainer>
  )
}

export default TestimonialCard