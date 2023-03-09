//This file defines the breakpoints for the media queries
//The purpose is to import the media queries as needed for each component and include the breakpoints
import { css } from "styled-components";

//Currently setup as a mobile first design, but should change to desktop first
const sizes = {
  uhd: 1980,
  widescreen: 1366,
  desktop: 1024,
  tablet: 768,
};

//Function that returns a tagged template literal of the CSS media query for the specified screen sized
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
