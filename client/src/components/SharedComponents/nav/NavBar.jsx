import React, { useState } from "react";
import {
  Nav,
  Hamburger,
  MenuLink,
  Menu,
  Logo,
  LogoImage,
  NavContainer,
} from "./styles/Nav.styled";
import Button from '../Button'
import { MenuLinks } from "./MenuLinks";
import { MobileNavDropDown } from "./NavDropDown";
import { HiChevronDown } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

// const HeaderContainer = styled.header`
//   width: 100vw;
//   background-color: #e7e6fd;
// `;

const NavBar = () => {
  //State for the mobile menu
  const [isOpen, setIsOpen] = useState(false);
  //State for the dropdown menu
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <Nav>
          <Logo href="/">
            <LogoImage
              src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1678492371/cleancut_logo_jhcvuf.png"
              alt="Cleancut.ai Logo"
            />
          </Logo>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <>
                <CgClose size={'35px'} color={'#f8705d'}/>
              </>
            ) : (
              <>
                <span />
                <span />
                <span />
              </>
            )}
          </Hamburger>
          <Menu isOpen={isOpen}>
            {/* This menulink map takes in the MenuLinks array and returns links based on object information  */}
            {/* this contains logic for a dropdown menu to be added later if needed in the future */}
            {MenuLinks.map((item, index) => {
              return (
                <>
                  {item.dropDown ? (
                    <>
                      <MenuLink
                        key={index}
                        onClick={() => setDropDownOpen(!dropDownOpen)}
                      >
                        {item.title}
                        <HiChevronDown />
                      </MenuLink>
                      {dropDownOpen && (
                        <MobileNavDropDown
                          subMenu={item.subMenu}
                          aside={item.aside}
                        />
                      )}
                    </>
                  ) : (
                    <MenuLink href={item.url} key={index}>
                      {item.title}
                    </MenuLink>
                  )}
                </>
              );
            })}
            <Button text={"Start Free Trial"} to="https://google.com" />
          </Menu>
        </Nav>
        {/* Dropdown links is rendered based like this for now...if there are multiple dropdowns this will have to change */}
        {/* {dropDownOpen && <NavDropDown isOpen={dropDownOpen} />} */}
      </NavContainer>
    </>
  );
};

export default NavBar;
