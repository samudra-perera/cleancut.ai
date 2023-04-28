import React from "react";
import {
  SocialBannerContainer,
  SocialBannerHeading,
  SocialBannerText,
  ImageContainer,
  SocialImages,
} from "./SocialBanner.style.js/SocialBanner.style";
import { socialImages } from "./SocialImages";
import { TestimonialDivider } from "../Testimonials/style/Testimonials.style";

const SocialBanner = () => {
  return (
    <SocialBannerContainer>
      <SocialBannerHeading>Perfectly Edited, Everytime.</SocialBannerHeading>
      <SocialBannerText>Trusted by professionals, including</SocialBannerText>
      <ImageContainer>
        {socialImages.map((image, index) => {
          return <SocialImages src={image.url} alt={image.name} key={index} />;
        })}
      </ImageContainer>
      <TestimonialDivider width={'100%'}/>
    </SocialBannerContainer>
  );
};

export default SocialBanner;
