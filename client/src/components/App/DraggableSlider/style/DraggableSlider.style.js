import styled from "styled-components";
import { media } from "../../../../style/media";

const DraggableContainer = styled.div`
  height: fit-content;
  overflow: hidden;
  position: relative;
  padding-top: 5rem;
  pointer-events: auto;
  touch-action: none;
  user-select: none;
  max-width: 1100px;
  margin: 0 auto;
  

  @media ${media.laptopLarge} {
    padding-top: 4rem;
  }

  @media ${media.laptop} {
    padding-top: 3rem;
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
  /* box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); */
`;

const SecondaryContainer = styled.div`
  margin: 4rem;
  @media ${media.laptop} {
    margin: 2rem;
  }

  @media ${media.tablet} {
    margin: 1rem;
  }
`;

const MainContainer = styled.div`
  overflow: hidden;
  margin: 0rem 4rem 5rem;

  @media ${media.laptopLarge} {
    margin: 0rem 2rem 5rem;
  }

  @media ${media.laptop} {
    margin: 0rem 2rem 5rem;
  }

  @media ${media.tablet} {
    margin: 0rem 1rem 5rem;
  }
`;

export {
  DraggableContainer,
  BeforeImage,
  AfterImage,
  ImageContainer,
  SecondaryContainer,
  MainContainer,
};
