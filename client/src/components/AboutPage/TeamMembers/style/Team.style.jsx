import styled from "styled-components";
import {
  StyledContainer,
  StyledHeading,
  StyledParagraph,
} from "../../../App/CallToAction/styles/CTA.styled";

const TeamContainer = styled(StyledContainer)`
  background-color: white;
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
`;

const TeamParagraph = styled(StyledParagraph)`
  font-family: Graphik-400;
  width: 40%;
`;

export { TeamContainer, TeamHeader, TeamParagraph, MemberContainer };
