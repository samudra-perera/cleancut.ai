import React from "react";
import styled from "styled-components";
import HeaderTag from "../../SharedComponents/HeaderTag";
import { Members } from "./Members";
import {
  TeamContainer,
  TeamHeader,
  TeamParagraph,
  MemberContainer,
} from "./style/Team.style";
import MemberCard from "./MemberCard";

const TeamMembersContainer = styled.div`
  width: 100vw;
  background-color: white;
`;

const TeamMembers = () => {
  return (
    <TeamMembersContainer>
      <TeamContainer>
        <HeaderTag text={"About Us"} />
        <TeamHeader>Meet the Team</TeamHeader>
        <TeamParagraph>
          Our team have previously worked on some of the largest AI projects at
          Google, Microsoft and Amazon. We're backed by some of the world's top
          investors including Index Ventures and Y Combinator.
        </TeamParagraph>
      </TeamContainer>
      <MemberContainer>
        {Members.map((member, index) => {
          return (
            <MemberCard
              key={index}
              name={member.name}
              title={member.title}
              headShotURL={member.headshotURL}
              accomplishments={member.accomplishments}
            />
          );
        })}
      </MemberContainer>
    </TeamMembersContainer>
  );
};

export default TeamMembers;
