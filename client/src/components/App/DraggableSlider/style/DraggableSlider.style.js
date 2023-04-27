import styled from "styled-components";
import { StyledContainer } from "../../CallToAction/styles/CTA.styled";
import { media } from "../../../../style/media";

const DraggableContainer = styled(StyledContainer)`
  height: fit-content;
  overflow: hidden;
  position: relative;

  @media ${media.tablet} {
    align-items: normal;
  }
`;

const BeforeImage = styled.img`
  position: relative;
  z-index: 10;
`;

const AfterImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  height: fit-content;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const SecondaryContainer = styled.div`
margin: 4rem;
`

const MainContainer = styled.div`
@media ${media.laptopLarge} {
  margin: 7rem 4rem;
}
`

export { DraggableContainer, BeforeImage, AfterImage, ImageContainer, SecondaryContainer, MainContainer };
