import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  background-color: #f8705d;
  font-size: .8rem;
  padding: .6rem 2rem;
  color: white;
  text-decoration: none;
  border-radius: 2rem;
  font-family: Graphik;
  font-weight: 500;
`;

//Button component with a text prop that allows for reusability across the application
//The component is a styled anchor tag
const Button = (props) => {
    //The Text prop renders what will be seen in the button
    //To prop will render the link, has to include http
  const { text, to } = props;

  return (
    <>
      <StyledButton href={to}>{text}</StyledButton>
    </>
  );
};

export default Button;
