//This component is now deprecated due to design changes March 27, 2023

// import React, { useState } from "react";
// import { MenuLinks } from "./MenuLinks";
// import styled from "styled-components";
// import { HiChevronDown } from "react-icons/hi";
// import { media } from "../../style/media";

// //Desktop Styles
// const DropDown = styled.div`
//   position: relative;
//   top: -18px;
//   background-color: white;
//   padding: 1.25rem 2rem 0rem 2rem;
//   display: flex;
//   font-family: Graphik;
//   justify-content: space-between;
//   border-radius: 0 0 1.5rem 1.5rem;
//   flex-wrap: wrap;
//   z-index: 1;
//   margin: 0rem 1rem;
//   max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
//   transition: max-height 0.7s ease-in;
//   overflow: hidden;

//   @media ${media.tablet} {
//     display: none;
//   }
// `;

// const AsideContent = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   padding: 0.8rem;
//   flex-grow: 6;
//   border-top: 0.5px solid #e8e8e8;
// `;

// const AsideLinks = styled.a`
//   padding: 1.5rem 0;
//   font-size: 2rem;
//   width: 50%;
//   cursor: pointer;
//   font-family: Graphik-500;
// `;

// const TestimonialContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-grow: 5;
//   padding-left: 1.5rem;
//   border-top: 0.5px solid #e8e8e8;
//   border-left: 0.5px solid #e8e8e8;
//   margin-bottom: 1.5rem;
// `;

// const TestimonialTitle = styled.h5`
//   font-size: 1rem;
//   font-weight: 400;
// `;

// const TestimonialLinks = styled.a`
//   font-size: 0.8rem;
//   font-weight: 300;
//   color: black;
//   padding: 0.3rem 0;
//   text-decoration: none;
// `;

// //Mobile Styles
// const MobileDropDown = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

// const SubMenuLink = styled.a`
//   text-decoration: none;
//   color: #03004e;
//   font-family: Graphik-400;
//   text-transform: uppercase;
//   font-size: 0.8rem;
//   display: flex;
//   cursor: pointer;
//   margin: 0.25rem 0;
//   align-items: center;
//   border-bottom: .5px solid white;

//   &:hover {
//     border-bottom: .5px solid black;
//   }
// `;

// const TestimonialLink = styled.a`
//   text-decoration: none;
//   color: #03004e;
//   font-family: Graphik-400;
//   text-transform: uppercase;
//   font-size: 0.8rem;
//   display: flex;
//   cursor: pointer;
//   align-items: center;
//   margin: 0.25rem 0;
//   border-bottom: .5px solid white;

//   &:hover {
//     border-bottom: .5px solid black;
//   }

//   @media ${media.tablet} {
//     &:hover {
//       border-bottom: none;
//     }
//   }
// `;

// //This is the desktop Navigation DropDown
// //Currently the date for this component is static and stuck as the single array value [0]
// const NavDropDown = (props) => {
//   const { isOpen } = props;
//   const subMenu = MenuLinks[0].subMenu;
//   const testimonials = MenuLinks[0].aside[0].links;

//   return (
//     <DropDown isOpen={isOpen}>
//       <AsideContent>
//         {subMenu.map((item, index) => {
//           return <AsideLinks key={index}>{item.title}</AsideLinks>;
//         })}
//       </AsideContent>
//       <TestimonialContent>
//         <TestimonialTitle>Testimonials</TestimonialTitle>
//         {
//           <>
//             {testimonials.map((item, index) => {
//               return (
//                 <TestimonialLinks key={index} href={item.url}>
//                   • {item.title}
//                 </TestimonialLinks>
//               );
//             })}
//           </>
//         }
//       </TestimonialContent>
//     </DropDown>
//   );
// };

// //this component is the mobile Navigation Dropdown
// const MobileNavDropDown = (props) => {
//   const [open, setOpen] = useState(false);
//   const { subMenu, aside } = props;
//   return (
//     <MobileDropDown>
//       {subMenu.map((item) => {
//         return <SubMenuLink href={item.url}>{item.title}</SubMenuLink>;
//       })}
//       <SubMenuLink onClick={() => setOpen(!open)}>
//         {aside[0].title} <HiChevronDown />
//       </SubMenuLink>
//       {open && (
//         <>
//           {aside[0].links.map((item) => {
//             return (
//               <TestimonialLink href={item.url}>{item.title}</TestimonialLink>
//             );
//           })}
//         </>
//       )}
//     </MobileDropDown>
//   );
// };

// export { NavDropDown, MobileNavDropDown, MobileDropDown, DropDown };
