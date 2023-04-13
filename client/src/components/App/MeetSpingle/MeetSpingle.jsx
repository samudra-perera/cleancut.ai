import React from "react";
import {
  MeetSpingleContainer,
  SpingleImage,
  MeetSpingleTextContainer,
  MeetSpingleText,
  MeetSpingleHeading,
} from "./style/MeetSpingle.style";
import EmailForm from "../../SharedComponents/EmailForm/EmailForm";
import { StyledLink } from "../CallToAction/styles/CTA.styled";
import { CTAButton } from "../CallToAction/styles/CTA.styled";
import EmailFormSubscription from "../../SharedComponents/EmailForm/EmailFormSubscription";

const MeetSpingle = () => {
  return (
    <MeetSpingleContainer>
      <SpingleImage src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1680936750/CleancutAssets/Spingle_Computer_a92gzn.png" />
      <MeetSpingleTextContainer>
        <MeetSpingleHeading>
          Meet Spingle, your Personal AI assistant
        </MeetSpingleHeading>
        <MeetSpingleText>
          What took hours is now completed in minutes. <br/>
          Get access to the beta through our{" "}
          <StyledLink href="https://www.google.com">
            Early Adopter Program
          </StyledLink>
        </MeetSpingleText>
        <CTAButton colour={'#F8705D'}>Start Free Trial</CTAButton>
        <EmailFormSubscription responsive={'none'} colour={'#F8705D'}/>
      </MeetSpingleTextContainer>
    </MeetSpingleContainer>
  );
};

export default MeetSpingle;
