import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  background-color: #721ED8;
  font-size: .8rem;
  padding: .6rem 2rem;
  color: white;
  text-decoration: none;
  border-radius: 2rem;
  font-family: Graphik-500;
  z-index: 3;
`;

//Button component with a text prop that allows for reusability across the application
//The component is a styled anchor tag
const Button = (props) => {
    //The Text prop renders what will be seen in the button
    //To prop will render the link, has to include http
  const { text, to, type } = props;

  return (
    <>
      <StyledButton href={to ? to : '#'} type={type ? type : null}>{text}</StyledButton>
    </>
  );
};

export default Button;
