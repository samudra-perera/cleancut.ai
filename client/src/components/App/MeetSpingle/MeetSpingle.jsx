import React from "react";
import {
  MeetSpingleContainer,
  SpingleImage,
  MeetSpingleTextContainer,
  MeetSpingleText,
  MeetSpingleHeading,
  ContainerContainer,
} from "./style/MeetSpingle.style";
import { StyledLink } from "../CallToAction/styles/CTA.styled";
import { CTAButton } from "../CallToAction/styles/CTA.styled";
import EmailFormSubscription from "../../SharedComponents/EmailForm/EmailFormSubscription";

const MeetSpingle = () => {
  return (
    <ContainerContainer>
      <MeetSpingleContainer>
        <SpingleImage src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1687294150/CleancutAssets/Spingle_Computer_sh2enf.webp" alt="Meet-Spingle_image"/>
        <MeetSpingleTextContainer>
          <MeetSpingleHeading>
            Meet Spingle, your Personal AI assistant
          </MeetSpingleHeading>
          <MeetSpingleText>
            What took hours is now completed in minutes. <br />
            Get access to the beta through our{" "}
            <StyledLink href="https://gaydjjpbnip.typeform.com/to/QZN78xC6?typeform-source=localhost" target="_blank">
              Early Adopter Program
            </StyledLink>
          </MeetSpingleText>
          <CTAButton
            colour={"#F8705D"}
            href="https://gaydjjpbnip.typeform.com/to/QZN78xC6"
            target="_blank"
          >
            Start Free Trial
          </CTAButton>
          <EmailFormSubscription responsive={"none"} colour={"#F8705D"} hoverColour={'#D26454'}/>
        </MeetSpingleTextContainer>
      </MeetSpingleContainer>
    </ContainerContainer>
  );
};

export default MeetSpingle;
