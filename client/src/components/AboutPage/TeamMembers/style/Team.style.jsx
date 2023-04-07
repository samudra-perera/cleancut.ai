import styled from "styled-components";
import {
  StyledContainer,
  StyledHeading,
  StyledParagraph,
} from "../../../App/CallToAction/styles/CTA.styled";
import { media } from "../../../../style/media";

const TeamContainer = styled(StyledContainer)`
  background-color: white;
  margin-bottom: 3rem;
`;

const MemberContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 4rem;
`;

const TeamHeader = styled(StyledHeading)`
  font-size: 3.5rem;
  font-family: Graphik-500;
  padding-bottom: 2rem;

  @media ${media.tablet} {
    font-size: 2.5rem;
    text-align: center;
    padding-bottom: 1rem;
  }

  @media ${media.mobile} {
    font-size: 2rem;
  }

`;

const TeamParagraph = styled(StyledParagraph)`
  font-family: Graphik-400;
  width: 40%;

  @media ${media.tablet} {
    width: 100%;
    margin: 0;
  }

`;

export { TeamContainer, TeamHeader, TeamParagraph, MemberContainer };
