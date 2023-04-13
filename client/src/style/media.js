//This file defines the breakpoints for the media queries
//The purpose is to import the media queries as needed for each component and include the breakpoints
//Currently setup as a mobile first design, but should change to desktop first
const sizes = {
  desktop: '2560px',
  maxWidth: '1800px',
  laptopLarge: '1366px',
  laptop: '1024px',
  tablet: '768px',
  mobile: '425px'
};

export const media = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopLarge: `(max-width: ${sizes.laptopLarge})`,
  maxWidth: `(max-width: ${sizes.maxWidth})`,
  desktop: `(max-width: ${sizes.desktop})`,
}