import styled from "styled-components";

//This is the navigation container styling
//The Nav needs to float over the content and be sticky as the user scrolls through the content
const Nav = styled.nav`
position: sticky;
top: 0;
left: 0;
right: 0;
background-color: white;
padding: 0rem 0rem 0rem 2rem;
display: flex;
justify-content: space-between;
border-radius: 1.5rem;
align-items: center;
flex-wrap: wrap;
z-index: 5;
margin: 1rem;
`;

const Hamburger = styled.div``

const MenuLink = styled.a`
text-decoration: none;
color: #03004E;
font-weight: 500;
text-transform: uppercase;
font-size: .8rem;
padding: 1.7rem 0rem;
`

const Menu = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
width: 40%;
font-family: Graphik;
`

const Logo = styled.a``

const LogoImage = styled.img`
width: 100px`

export {Nav, Hamburger, MenuLink, Menu, Logo, LogoImage}