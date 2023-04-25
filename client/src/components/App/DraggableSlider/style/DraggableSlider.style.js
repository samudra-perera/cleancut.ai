import styled from "styled-components";
import { StyledContainer } from "../../CallToAction/styles/CTA.styled";

const DraggableContainer = styled(StyledContainer)`
height: fit-content;
border: 2px red solid;
overflow: hidden;
position: relative;
`

const BeforeImage = styled.img`
position: relative;
z-index: 10;
`

const AfterImage = styled.img`
position: absolute;
top: 0;
left: 0;
height: 100%;
`

const ImageContainer = styled.div`

`

export {DraggableContainer, BeforeImage, AfterImage, ImageContainer}