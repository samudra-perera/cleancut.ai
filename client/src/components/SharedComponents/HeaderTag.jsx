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
  color: ${props => props.color || '#4A01A4'};
  font-family: Graphik-500;
  text-transform: uppercase;
  margin: 0;

  @media ${media.tablet} {
    margin: 1rem 0;
  }
`;


const HeaderTag = (props) => {
  const { text, color } = props;
  return (
    <>
      <HeaderTagContainer>
        <HeaderText color={color}>{text}</HeaderText>
      </HeaderTagContainer>
    </>
  );
};

export default HeaderTag;
