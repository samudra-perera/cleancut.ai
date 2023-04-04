import styled from "styled-components";
import { StyledParagraph } from "../../CallToAction/styles/CTA.styled";

const CardContainer = styled.div`
  width: 35%;
  background-color: white;
  margin: 1.5rem;
  padding: 1.5rem;
  border-radius: 1rem;
`;

const CardQuote = styled(StyledParagraph)`
  font-size: 1.1rem;
  width: 90%;
  line-height: 1.4;
  padding-top: .5rem;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0 1.5rem 0;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 90px;
  width: auto;
`;

const AvatarName = styled.span`
  font-family: Graphik-500-italic;
  font-size: .9rem;
`;
const AvatarSpan = styled.span`
  font-family: Graphik-300-italic;
  font-size: .9rem;
`;

const AvatarTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export {
  CardContainer,
  CardQuote,
  AvatarContainer,
  Avatar,
  AvatarTextContainer,
  AvatarSpan,
  AvatarName,
};
