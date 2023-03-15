import styled from "styled-components";
import { StyledLink } from "../../CallToAction/styles/CTA.styled";

const FooterContainer = styled.div`
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: row;
`;
const FooterContentContainer = styled.div`
  width: 50%;
  flex-direction: column;
  margin: 2rem;
  padding: 1.5rem 3rem 1.5rem 1.5rem;
  border-right: ${({ left }) => (left ? ".5px solid grey" : "none")};
  display: flex;
`;

const FooterHeading = styled.h5`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
`;

const FooterText = styled.p.attrs((props) => ({
  size: props.size || "1.6",
}))`
  font-size: 1rem;
  font-weight: 300;
  line-height: ${(props) => props.size};
`;

//this refers to the job links 
const FooterLink = styled(StyledLink)`
  padding: 0.5rem 0;
  color: black;
`;

const FooterInput = styled.input`
padding-right: 2rem;
font-family: Graphik;
font-size: .8rem;
font-weight: 300;
border: none;
margin: 0 .5rem;
`;

const FooterForm = styled.form`
  display: flex;
  flex-direction: row;
  border: .5px solid grey;
  width: fit-content;
  padding: .2rem;
  border-radius: 2rem;
`;

const FooterLinksContainer = styled.div`
    margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.8rem;
  flex-grow: 6;
`;

const FooterNavLinks = styled.a`
  padding: 1.5rem 0;
  font-size: 2rem;
  width: 50%;
  cursor: pointer;
  font-weight: 400;
  text-decoration: none;
  color: black;
`;


 

export {
  FooterContainer,
  FooterContentContainer,
  FooterHeading,
  FooterText,
  FooterLink,
  FooterInput,
  FooterForm,
  FooterNavLinks,
  FooterLinksContainer
};
