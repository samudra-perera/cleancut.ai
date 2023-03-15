import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: row;
`
const FooterContentContainer = styled.div`
    width: 50%;
    flex-direction: column;
    margin: 2rem;
    padding: 1.5rem 3rem 1.5rem 1.5rem;
    border-right: ${({ left }) => (left ? ".5px solid grey" : "none")};
`

const FooterHeading = styled.h5`
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;
`

const FooterText = styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
`

export {FooterContainer, FooterContentContainer, FooterHeading, FooterText}