import styled from "styled-components";
import { media } from "../../../../style/media";
//This is the navigation container styling
//The Nav needs to float over the content and be sticky as the user scrolls through the content
const NavContainer = styled.div`
  position: sticky;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 5;
  max-width: 1800px;
  margin: 0 auto;
`;
const Nav = styled.nav`
  background-color: white;
  padding: 0rem 0rem 0rem 2rem;
  display: flex;
  justify-content: space-between;
  border-radius: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
  z-index: 5;
  margin: 0rem 1rem 0rem 1rem;
  padding: 1rem;
  filter: drop-shadow(0 0 0.15rem grey);

  @media ${media.tablet} {
    padding: 0.5rem 0rem 1rem 0rem;
    border-radius: .8rem;
    filter: drop-shadow(0 0 0.15rem lightgrey);;
  }
`;

const Hamburger = styled.div`
  flex-direction: column;
  display: none;
  cursor: pointer;
  color: black;

  span {
    border: 1px solid #000000;
    width: 25px;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media ${media.tablet} {
    display: flex;
    position: relative;
    right: 20px;
    top: 5px;
  }
`;

const MenuLink = styled.a`
  font-family: Graphik-500;
  text-decoration: none;
  color: #03004e;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 1.7rem 1.3rem;
  display: flex;
  margin-right: 3rem;
  cursor: pointer;
  align-items: center;
  border-bottom: solid white;

  &:hover {
    border-bottom: solid black;
  }

  @media ${media.tablet} {
    margin-right: 0;
    width: 100%;
    justify-content: center;
    &:hover {
      border-bottom: none;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 40%;
  margin-right: 2rem;
  font-family: Graphik;

  @media ${media.laptopLarge} {
    width: 50%;
  }

  @media ${media.laptop} {
    width: 70%;
  }

  @media ${media.tablet} {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
    transition: max-height 0.3s ease-in;
    margin-right: 0;
  }
`;

const Logo = styled.a``;

const LogoImage = styled.img`
  height: auto;
  width: 150px;
  position: relative;

  @media ${media.tablet} {
    width: 150px;
    left: 20px;
    top: 5px;
  }
`;

export { Nav, Hamburger, MenuLink, Menu, Logo, LogoImage, NavContainer };
