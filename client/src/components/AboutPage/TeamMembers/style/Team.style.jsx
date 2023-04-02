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
`;

const TeamHeader = styled(StyledHeading)`
  text-transform: uppercase;
  color: #03004e;
`;

const TeamParagraph = styled(StyledParagraph)`
  font-family: Graphik-400;
  width: 25%;
`;

export { TeamContainer, TeamHeader, TeamParagraph, MemberContainer };
