import styled from "styled-components";
import {
  StyledContainer,
  StyledHeading,
  StyledParagraph,
} from "../../CallToAction/styles/CTA.styled";
import { media } from "../../../../style/media";

const SocialBannerContainer = styled(StyledContainer)`
    align-items: center;
    margin-top: 0;

    @media ${media.tablet} {
        margin: 2rem;
    }
`;

const SocialBannerHeading = styled(StyledHeading)`
  text-align: center;
  font-size: 2.5rem;
  line-height: 2rem;

  @media ${media.tablet} {
    font-size: 1.7rem;
    width: 100%;
  }

  @media ${media.mobile} {
    font-size: 1.3rem;
  }

`;

const SocialBannerText = styled(StyledParagraph)`
  text-align: center;
  font-size: 1.2rem;
  margin: 3rem 0;

  @media ${media.tablet} {
    margin: 2rem 0;
    font-size: 1.1rem;
  }

  @media ${media.tablet} {
    font-size: .9rem;
    margin: 1.5rem 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-bottom: 6rem;

  @media ${media.laptop} {
    width: 70%;
  }

  @media ${media.tablet} {
    margin-bottom: 4rem;
  }
`;
const SocialImages = styled.img`
  height: 70px;

  @media ${media.tablet} {
    height: 45px;
  }

  @media ${media.mobile} {
    height: 35px;
  }
`;

export {
  SocialBannerContainer,
  SocialBannerHeading,
  SocialBannerText,
  ImageContainer,
  SocialImages,
};
