import styled from "styled-components";
import { StyledParagraph } from "../../../App/CallToAction/styles/CTA.styled";

const CardContainer = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    background: #FFFFFF;

`
const CardText = styled(StyledParagraph)`

`

export {CardContainer, CardText}