import React from "react";
import styled from "styled-components";

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
const HeadShot = styled.img`
  width: 350px;
  max-height: 350px;
  height: auto;
`;
const Name = styled.h5`
  font-family: Graphik-600;
  font-size: 1.3rem;
  margin-bottom: 0.2rem;
  margin-top: 1rem;
`;
const Title = styled.h6`
  font-family: Graphik-400;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: .2rem;
`;

const WorkPoint = styled.p`
  font-family: Graphik-400;
  font-size: .8rem;
  margin: .1rem 0;
`;

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
