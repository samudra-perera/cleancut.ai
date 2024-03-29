import styled from "styled-components";
import { media } from "../../../../style/media";

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 1rem;

  @media ${media.laptop} {
    margin-bottom: .5rem;
  }

`;
const HeadShot = styled.img`
  width: 350px;
  max-height: 350px;
  height: auto;

  @media ${media.laptopLarge} {
    width: 275px;
    max-height: 275px;
    height: auto;
  }
`;
const Name = styled.h5`
  font-family: Graphik-500;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  margin-top: 1.2rem;

  @media ${media.laptopLarge} {
    font-size: 1rem;
  }

`;
const Title = styled.h6`
  font-family: Graphik-300;
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: .7rem;

  @media ${media.laptopLarge} {
    font-size: .9rem;
  }

`;

const WorkPoint = styled.p`
  font-family: Graphik-400;
  font-size: .9rem;
  margin: .1rem 0;

  @media ${media.laptopLarge} {
    font-size: .7rem;
  }
`;  

export {MemberContainer, HeadShot, Name, Title, WorkPoint}