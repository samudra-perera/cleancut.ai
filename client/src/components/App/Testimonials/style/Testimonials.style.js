import styled from "styled-components";
import { StyledContainer } from "../../CallToAction/styles/CTA.styled";
import { media } from "../../../../style/media";

const TestimonialContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 5rem;
`;

const TestimonialHeader = styled.h3`
  padding-top: 4rem;
  font-family: Graphik-500;
  font-size: 2.5rem;
  width: 90%;
  text-align: center;

  @media ${media.laptop} {
    font-size: 2rem;
  }

  @media ${media.tablet} {
    font-size: 1.5rem;
    padding-top: 2rem;
  }

  @media ${media.mobile} {
    font-size: 1rem;
    padding-top: 1rem;
  }

`;

const TestimonialCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4rem 3rem;

  @media ${media.laptopLarge} {
    margin: 2rem 1rem;
  }

  @media ${media.laptop} {
    margin: 2rem 0;
  }
`;

const TestimonialDivider = styled.div`
  height: 2px;
  width: ${props => props.width || '90%'};
  background-color: white;
`;

export {
  TestimonialCardContainer,
  TestimonialDivider,
  TestimonialHeader,
  TestimonialContainer,
};
