import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  background-color: #721ED8;
  font-size: .8rem;
  padding: ${props => props.padding || '.6rem 2rem'};
  color: white;
  text-decoration: none;
  border-radius: 2rem;
  font-family: Graphik-500;
  z-index: 3;
  width: ${props => props.width};
  min-width: 130px;
  text-align: center;
`;

//Button component with a text prop that allows for reusability across the application
//The component is a styled anchor tag
const Button = (props) => {
    //The Text prop renders what will be seen in the button
    //To prop will render the link, has to include http
    //The type prop will determine the action
    //The width prop is for custom widths
  const { text, to, type, width, padding } = props;

  return (
    <>
      <StyledButton href={to ? to : '#'} type={type ? type : null} width={width} padding={padding}>{text}</StyledButton>
    </>
  );
};

export default Button;
