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
  margin: 7rem 4rem 5rem;

  @media ${media.laptopLarge} {
    margin: 7rem 2rem 5rem;
  }

  @media ${media.laptop} {
    margin: 7rem 2rem 5rem;
  }

  @media ${media.tablet} {
    margin: 7rem 1rem 5rem;
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
