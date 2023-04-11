import styled from "styled-components";
import { StyledParagraph } from "../../../App/CallToAction/styles/CTA.styled";

const CardContainer = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    background: #FFFFFF;
    padding: 2rem 1rem 1rem;
    border-radius: 2rem;
    height: fit-content;
    position: relative;
    top: 215px;
    left: 345px;

`
const CardText = styled(StyledParagraph)`
font-family: Graphik-400;
text-align: center;
margin: 0;
padding-bottom: 2rem;
padding-top: 1rem;
`

export {CardContainer, CardText}