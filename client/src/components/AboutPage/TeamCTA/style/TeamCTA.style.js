import styled from "styled-components";
import {
  StyledContainer,
  StyledHeading,
  StyledParagraph,
} from "../../../App/CallToAction/styles/CTA.styled";

const TeamCTAHeading = styled(StyledHeading)`
font-size: 3.5rem;
font-family: Graphik-500;
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
  line-height: 1.5rem;
`;

const TeamCTATextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 5rem;
`;

const TeamCTASpan = styled.span`
    font-family: Graphik-500;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #4A01A4;
`

const TeamCTAImage = styled.img`
width: 100%;
height: 80%;
`


export {
  TeamCTAHeading,
  TeamCTAContainer,
  TeamCTAParagraph,
  TeamCTATextContainer,
  TeamCTASpan,
  TeamCTAImage
};
