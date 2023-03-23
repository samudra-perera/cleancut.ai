import React, { useState } from "react";
import { MenuLinks } from "./MenuLinks";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi";

//Desktop Styles
const DropDown = styled.div`
  position: relative;
  top: -20px;
  background-color: white;
  padding: 1rem 0rem 0rem 2rem;
  display: flex;
  font-family: Graphik;
  justify-content: space-between;
  border-radius: 0 0 1.5rem 1.5rem;
  flex-wrap: wrap;
  z-index: 1;
  margin: 0rem 1rem;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  transition: max-height 0.7s ease-in;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const AsideContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.8rem;
  flex-grow: 6;
`;

const AsideLinks = styled.a`
  padding: 1.5rem 0;
  font-size: 2rem;
  width: 50%;
  cursor: pointer;
  font-family: Graphik-500;
`;

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 5;
  padding-left: 1.5rem;
`;

const TestimonialTitle = styled.h5`
  font-size: 1rem;
  font-weight: 400;
`;

const TestimonialLinks = styled.a`
  font-size: 0.8rem;
  font-weight: 300;
  color: black;
  padding: 0.3rem 0;
  text-decoration: none;
`;

//Mobile Styles
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
//Currently the date for this component is static and stuck as the single array value [0]
const NavDropDown = (props) => {
  const { isOpen } = props;
  const subMenu = MenuLinks[0].subMenu;
  const testimonials = MenuLinks[0].aside[0].links;

  return (
    <DropDown isOpen={isOpen}>
      <AsideContent>
        {subMenu.map((item, index) => {
          return <AsideLinks key={index}>{item.title}</AsideLinks>;
        })}
      </AsideContent>
      <TestimonialContent>
        <TestimonialTitle>Testimonials</TestimonialTitle>
        {
          <>
            {testimonials.map((item, index) => {
              return (
                <TestimonialLinks key={index} href={item.url}>
                  • {item.title}
                </TestimonialLinks>
              );
            })}
          </>
        }
      </TestimonialContent>
    </DropDown>
  );
};

//this component is the mobile Navigation Dropdown
const MobileNavDropDown = (props) => {
  const [open, setOpen] = useState(false);
  const { subMenu, aside } = props;
  return (
    <MobileDropDown>
      {subMenu.map((item) => {
        return <SubMenuLink href={item.url}>{item.title}</SubMenuLink>;
      })}
      <SubMenuLink onClick={() => setOpen(!open)}>
        {aside[0].title} <HiChevronDown />
      </SubMenuLink>
      {open && (
        <>
          {aside[0].links.map((item) => {
            return (
              <TestimonialLink href={item.url}>{item.title}</TestimonialLink>
            );
          })}
        </>
      )}
    </MobileDropDown>
  );
};

export { NavDropDown, MobileNavDropDown, MobileDropDown, DropDown };
