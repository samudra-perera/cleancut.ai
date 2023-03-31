import styled from "styled-components";
import { StyledContainer, StyledHeading, StyledParagraph } from "../../../App/CallToAction/styles/CTA.styled";

const TeamContainer = styled(StyledContainer)`
background-color: white;
`

const TeamHeader = styled(StyledHeading)`
text-transform: uppercase;
color: #03004E;
`

const TeamParagraph = styled(StyledParagraph)`
    font-family: Graphik-400;
    width: 25%;
`



export {TeamContainer, TeamHeader, TeamParagraph}