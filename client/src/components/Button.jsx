import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color: red;
font-size: 32px;
color: white;
`

//Button component with a text prop that allows for reusability
const Button = (props) => {
    const {text} = props
  return (
    <>
        <StyledButton>{text}</StyledButton>
    </>
  )
}

export default Button