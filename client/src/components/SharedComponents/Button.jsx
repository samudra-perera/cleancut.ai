import React from "react";
import styled from "styled-components";
import { media } from "../../style/media";

const StyledButton = styled.a`
  background-color: ${(props) => props.colour || "#721ED8"};
  font-size: 0.8rem;
  padding: ${(props) => props.padding || ".8rem 2rem"};
  color: white;
  text-decoration: none;
  border-radius: 2rem;
  font-family: Graphik-500;
  z-index: 3;
  width: ${(props) => props.width};
  min-width: 80px;
  text-align: center;

  @media ${media.tablet} {
    margin-top: 1rem;
  }
`;

//Button component with a text prop that allows for reusability across the application
//The component is a styled anchor tag
const Button = (props) => {
  //The Text prop renders what will be seen in the button
  //To prop will render the link, has to include http
  //The type prop will determine the action
  //The width prop is for custom widths
  const { text, to, type, width, padding, colour } = props;

  return (
    <>
      <StyledButton
        target="_blank"
        href={to ? to : "#"}
        type={type ? type : null}
        width={width}
        padding={padding}
        colour={colour}
      >
        {text}
      </StyledButton>
    </>
  );
};

export default Button;
