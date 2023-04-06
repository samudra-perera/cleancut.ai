import React from "react";
import styled from "styled-components";
import {
  TeamCTAHeading,
  TeamCTAContainer,
  TeamCTAParagraph,
  TeamCTATextContainer,
  TeamCTASpan,
  TeamCTAImage,
} from "./style/TeamCTA.style";

const CTAContainer = styled.div`
  height: 100vh;
  background-color: #e7e6fd;
  display: flex;
  color: #03004e;
  overflow: hidden;
`;

const TeamCTA = () => {
  return (
    <CTAContainer>
      <TeamCTAContainer>
        <TeamCTASpan>Our Mission</TeamCTASpan>
        <TeamCTATextContainer>
          <TeamCTAHeading>
            Revolutionize the future of Storytelling.
          </TeamCTAHeading>
          <TeamCTAParagraph>
            Our mission is to empower storytellers with AI-driven video editing
            tools that enhance the creative process and bring their narratives
            to life.
          </TeamCTAParagraph>
        </TeamCTATextContainer>
        <TeamCTAImage src="https://source.unsplash.com/random/blackAndWhite" />
      </TeamCTAContainer>
    </CTAContainer>
  );
};

export default TeamCTA;
