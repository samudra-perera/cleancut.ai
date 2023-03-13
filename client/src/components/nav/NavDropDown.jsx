import React, { useState } from "react";
import { MenuLink } from "./styles/Nav.styled";
import styled from "styled-components";

const DropDown = styled.div`
  background-color: white;
  padding: 1rem 0rem 0rem 2rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 1.5rem 1.5rem;
  align-items: center;
  flex-wrap: wrap;
  z-index: 5;
  margin: 0rem 1rem;
  height: 200px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileDropDown = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

//Component for the dropdown navigation section that is full width
const NavDropDown = (props) => {
  const { title } = props;
  return (
    <>
      <DropDown>This is some completely random stuff for now</DropDown>
    </>
  );
};

const MobileNavDropDown = (props) => {
  const { title } = props;
  return (
    <>
      <MobileDropDown>
        This is some completely random stuff for now
      </MobileDropDown>
    </>
  );
};

export { NavDropDown, MobileNavDropDown, MobileDropDown, DropDown };
