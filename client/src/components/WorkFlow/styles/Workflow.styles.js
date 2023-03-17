import styled from "styled-components";
import { StyledContainer, StyledHeading } from "../../CallToAction/styles/CTA.styled";

const WorkFlowContainer = styled.div`
    background-color: #FBFBFF;
    width: 100vw;
`
const WorkFlowHeaderContainer = styled(StyledContainer)`
`

const WorkFlowHeading = styled(StyledHeading)`
    color: #03004E;
    width: 60%;
    text-transform: uppercase;
    margin-top: .5rem;
    line-height: 1.3;
`

export {WorkFlowContainer, WorkFlowHeaderContainer, WorkFlowHeading}