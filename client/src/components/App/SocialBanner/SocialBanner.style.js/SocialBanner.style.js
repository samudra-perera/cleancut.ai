import styled from "styled-components";
import {
  StyledContainer,
  StyledHeading,
  StyledParagraph,
} from "../../CallToAction/styles/CTA.styled";

const SocialBannerContainer = styled(StyledContainer)`
    align-items: center;
`;

const SocialBannerHeading = styled(StyledHeading)`
  text-align: center;
  font-size: 2.5rem;
`;

const SocialBannerText = styled(StyledParagraph)`
  text-align: center;
  font-size: 1.2rem;
  margin: 3rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-bottom: 6rem;
`;
const SocialImages = styled.img`
  height: 70px;
`;

export {
  SocialBannerContainer,
  SocialBannerHeading,
  SocialBannerText,
  ImageContainer,
  SocialImages,
};
