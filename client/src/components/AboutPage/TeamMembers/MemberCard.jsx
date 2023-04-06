import React from "react";
import {MemberContainer, HeadShot, Name, Title, WorkPoint} from "./style/MemberCard.style";

const MemberCard = (props) => {
  const { name, title, accomplishments, headShotURL } = props;
  return (
    <MemberContainer>
      <HeadShot src={headShotURL} />
      <Name>{name}</Name>
      <Title>{title}</Title>
      {accomplishments.map((point, index) => {
        return <WorkPoint key={index}>{point}</WorkPoint>;
      })}
    </MemberContainer>
  );
};

export default MemberCard;
