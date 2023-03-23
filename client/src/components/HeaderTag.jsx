import React from "react";
import styled from "styled-components";

const HeaderTagContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled.h5`
  font-size: 1rem;
  color: ${props => props.color || '#B1531E'};
  font-family: Graphik-400;
  text-transform: uppercase;
`;
const HeaderLine = styled.div`
  height: 1.5px;
  background-color: ${props => props.color || '#B1531E'};
  flex-grow: 1;
  margin-left: 0.5rem;
`;

const HeaderTag = (props) => {
  const { text, color } = props;
  return (
    <>
      <HeaderTagContainer>
        <HeaderText color={color}>{text}</HeaderText>
        <HeaderLine color={color}></HeaderLine>
      </HeaderTagContainer>
    </>
  );
};

export default HeaderTag;
