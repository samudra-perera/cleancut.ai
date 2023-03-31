import styled from "styled-components";
import {
  StyledContainer,
  StyledHeading,
  StyledParagraph,
} from "../../../App/CallToAction/styles/CTA.styled";

const TeamCTAHeading = styled(StyledHeading)`
width: 50%;
`;

const TeamCTAContainer = styled(StyledContainer)`
margin: 8rem 6rem 2rem 6rem;
flex-grow: 0;
`;

const TeamCTAParagraph = styled(StyledParagraph)`
  text-align: right;
  width: 20%;
  font-family: Graphik-400;
  margin-right: 0rem;
`;

const TeamCTATextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

const TeamCTASpan = styled.span`
    font-family: Graphik-500;
    font-size: 1.2rem;
`

const TeamCTAImage = styled.img`
height: 395px;
width: 100%;
`


export {
  TeamCTAHeading,
  TeamCTAContainer,
  TeamCTAParagraph,
  TeamCTATextContainer,
  TeamCTASpan,
  TeamCTAImage
};
