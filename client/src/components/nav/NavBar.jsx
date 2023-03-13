import React, { useState } from "react";
import {
  Nav,
  Hamburger,
  MenuLink,
  Menu,
  Logo,
  LogoImage,
} from "./styles/Nav.styled";
import Button from "../Button";

const NavBar = () => {
  //State for the mobile menu 
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Nav>
        <Logo href="/">
          <LogoImage
            src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1678492371/cleancut_logo_jhcvuf.png"
            alt="Cleancut.ai Logo"
          />
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink href="#">Resources</MenuLink>
          <MenuLink href="/about">About</MenuLink>
          <MenuLink href="#">Sign-in</MenuLink>
          <Button text={"Start Free Trial"} to="https://google.com" />
        </Menu>
      </Nav>
    </>
  );
};

export default NavBar;
