import styled from "styled-components";

const StyledImage = styled.img`
  flex-grow: 5;
  height: auto;
  width: auto;
  
`;

const StyledContainer = styled.div`
flex-grow: 4;
margin: 7rem 6rem;
`
const StyledHeading = styled.h1`
font-size: 5rem;
margin: 1rem 0%;
font-weight: 700;
`

const StyledParagraph = styled.p`
    font-size: 1.1rem;
    font-weight: 300;
    margin: 1rem 6rem 1rem 0rem;
`

const StyledLink = styled.a`
    color: #03004e;
    cursor: pointer;
    text-decoration: underline;
`

export { StyledImage, StyledContainer, StyledHeading, StyledParagraph, StyledLink};
