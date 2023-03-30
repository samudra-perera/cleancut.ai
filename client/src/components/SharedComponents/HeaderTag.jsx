import React from "react";
import styled from "styled-components";
import { media } from "../../style/media";

const HeaderTagContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${media.tablet} {
    margin-top: 3rem;
    flex-direction: column;
    width: 80vw;
  }

`;

const HeaderText = styled.h5`
  font-size: 1rem;
  color: ${props => props.color || '#B1531E'};
  font-family: Graphik-400;
  text-transform: uppercase;

  @media ${media.tablet} {
    margin: 1rem 0;
  }
`;
const HeaderLine = styled.div`
  height: 1.5px;
  background-color: ${props => props.color || '#B1531E'};
  flex-grow: 1;
  margin-left: 0.5rem;

  @media ${media.tablet} {
    width: 100%;
  }
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
