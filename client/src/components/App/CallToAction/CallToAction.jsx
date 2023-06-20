//When the trailer is released we can uncomment the code and link the vimeo file to the trailer
//Add Second call to action button for signup when mobile

import React from "react";
import styled from "styled-components";
import { media } from "../../../style/media";
import {
  CTAButton,
  StyledCTAContainer,
  CTAHeading,
  StyledImage,
  CTAParagraph,
} from "./styles/CTA.styled";
import EmailFormSubscription from "../../SharedComponents/EmailForm/EmailFormSubscription";

//CTA Containter Div
const CTA = styled.div`
  height: fit-content;
  background-color: #e7e6fd;
  display: flex;
  flex-direction: row;
  color: #03004e;
  overflow: hidden;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;

  @media ${media.tablet} {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const CallToAction = () => {
  //State to Toggle the trailer div
  // const [toggle, setToggle] = useState(false);

  return (
    <>
      <CTA>
        <StyledCTAContainer>
          <CTAHeading>
            Less Editing.
            <br /> More Story.{" "}
          </CTAHeading>
          <CTAParagraph>
            Let Spingle (our AI) Skillfully Identify the Most Captivating
            Moments in Your Footage.
          </CTAParagraph>
          <CTAButton
            href="https://gaydjjpbnip.typeform.com/to/QZN78xC6"
            target="_blank"
          >
            Start Free Trial
          </CTAButton>
          <EmailFormSubscription responsive={"none"} />
        </StyledCTAContainer>
        <StyledImage
          src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1687291729/CleancutAssets/spinle_CTA_ibqrkc.webp"
          alt="Image of Spingle"
        />
      </CTA>
    </>
  );
};

export default CallToAction;
