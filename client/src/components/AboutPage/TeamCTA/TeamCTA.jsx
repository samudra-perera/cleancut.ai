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
            Change the way stories are told forever.
          </TeamCTAHeading>
          <TeamCTAParagraph>
            At cleancut we are building AI tools to help film makers and content
            creators focus on crafting the perfect story.
          </TeamCTAParagraph>
        </TeamCTATextContainer>
        <TeamCTAImage src="https://source.unsplash.com/random/blackAndWhite" />
      </TeamCTAContainer>
    </CTAContainer>
  );
};

export default TeamCTA;
