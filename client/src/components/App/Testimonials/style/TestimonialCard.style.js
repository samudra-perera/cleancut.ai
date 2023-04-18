import styled from "styled-components";
import { media } from "../../../../style/media";
import { StyledParagraph } from "../../CallToAction/styles/CTA.styled";

const CardBorder = styled.div`
  width: 40%;
  background-color: #ebedff;
  margin: 1.5rem;
  padding: 1.1rem;
  border-radius: 1.5rem;
  @media ${media.tablet} {
    width: 100%;
  }
`;

const CardContainer = styled.div`
  background-color: white;
  padding: 1rem 1rem 1rem 1.7rem;
  border-radius: 1rem;
  height: inherit;
  min-height: 280px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  @media ${media.tablet} {
    min-height: 200px;
    padding: 1rem;
  }

  @media ${media.mobile} {
    min-height: 310px;
  }
`;

const CardQuote = styled(StyledParagraph)`
  font-size: 1.1rem;
  width: 90%;
  line-height: 1.4;
  font-family: Graphik-400;

  @media ${media.tablet} {
    width: 100%;
    text-align: left;
    margin: 0;
    padding: 0;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 0.5rem;
  align-items: center;
  @media ${media.tablet} {
    padding-bottom: 0;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 70px;
  width: auto;
`;

const AvatarName = styled.span`
  font-family: Graphik-500-italic;
  font-size: 0.9rem;
  padding-bottom: 0.3rem;
`;
const AvatarSpan = styled.span`
  font-family: Graphik-300-italic;
  font-size: 0.9rem;
`;

const AvatarTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export {
  CardBorder,
  CardQuote,
  AvatarContainer,
  Avatar,
  AvatarTextContainer,
  AvatarSpan,
  AvatarName,
  CardContainer,
};
