import styled from "styled-components";
import { StyledParagraph } from "../../CallToAction/styles/CTA.styled";

const CardContainer = styled.div`
  width: 40%;
  background-color: white;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
`;

const CardQuote = styled(StyledParagraph)`
  font-size: 1rem;
`;

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Avatar = styled.img`
border-radius: 50%;
height: 90px;
width: auto;
`;

const AvatarName = styled.span`

`
const AvatarSpan = styled.span`
    font-family: Graphik-300-italic;
`


const AvatarTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export { CardContainer, CardQuote, AvatarContainer, Avatar, AvatarTextContainer, AvatarSpan, AvatarName };
