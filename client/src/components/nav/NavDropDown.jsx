import React, { useState } from "react";
import { MenuLink } from "./styles/Nav.styled";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi";

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
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SubMenuLink = styled.a`
  text-decoration: none;
  color: #03004e;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.8rem;
  display: flex;
  cursor: pointer;
  align-items: center;

  &:hover {
    border-bottom: solid black;
  }
`;

const TestimonialLink = styled.a`
  text-decoration: none;
  color: #03004e;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.8rem;
  display: flex;
  cursor: pointer;
  align-items: center;

  &:hover {
    border-bottom: solid black;
  }
`;

//This is the desktop Navigation DropDown
const NavDropDown = (props) => {
  const { title } = props;
  return (
    <>
      <DropDown>This is some completely random stuff for now</DropDown>
    </>
  );
};

//this component is the mobile Navigation Dropdown
const MobileNavDropDown = (props) => {
  const [open, setOpen] = useState(false);
  const { subMenu, aside } = props;
  console.log(subMenu);
  return (
    <MobileDropDown>
      {subMenu.map((item) => {
        return <SubMenuLink href={item.url}>{item.title}</SubMenuLink>;
      })}
      <SubMenuLink onClick={() => setOpen(!open)}>
        {aside[0].title} <HiChevronDown />
      </SubMenuLink>
      {
        open && 
        <>
        {
            aside[0].links.map((item) => {
                return <TestimonialLink href={item.url}>{item.title}</TestimonialLink>
            })
        }
        </>
            
      }
    </MobileDropDown>
  );
};

export { NavDropDown, MobileNavDropDown, MobileDropDown, DropDown };
