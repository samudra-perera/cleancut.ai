import React from "react";
import styled from "styled-components";
import HeaderTag from "../../SharedComponents/HeaderTag";
import { Members } from "./Members";
import { TeamContainer, TeamHeader, TeamParagraph, MemberContainer } from "./style/Team.style";
import MemberCard from "./MemberCard";

const TeamMembersContainer = styled.div`
  width: 100vw;
  background-color: white;
`;

const TeamMembers = () => {
  return (
    <TeamMembersContainer>
      <TeamContainer>
        <HeaderTag text={"Founded by friends, powered by visionaries"} />
        <TeamHeader>Meet the Team</TeamHeader>
        <TeamParagraph>
          Our team has previously worked at some of the largest engineering
          companies in the world .... (Amazon, Asana, etc)
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
