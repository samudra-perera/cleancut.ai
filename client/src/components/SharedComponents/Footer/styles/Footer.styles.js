import styled from "styled-components";
import { StyledLink } from '../../../App/CallToAction/styles/CTA.styled';
import { media } from "../../../../style/media";

const FooterContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  padding: 1rem 0;

  @media ${media.mobile} {
    flex-direction: column-reverse;
    align-items: center;
  }

`;
const FooterContentContainer = styled.div`
  width: 50%;
  flex-direction: column;
  margin: 2rem;
  padding: 1.5rem 3rem 1.5rem 1.5rem;
  border-right: ${({ left }) => (left ? ".5px solid grey" : "none")};
  display: flex;

  @media ${media.tablet} {
    padding: 1rem;
    margin: 0;
  }

  @media ${media.mobile} {
    border-right: none;
    width: 80%;
    /* border-top: ${({ left }) => (left ? ".5px solid grey" : "none")}; */
    padding-bottom: 1.5rem;
  }

`;

const FooterHeading = styled.h5`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;

  @media ${media.tablet} {
    font-size: 1rem;
  }
`;

const FooterText = styled.p.attrs((props) => ({
  size: props.size || "1.6",
}))`
  font-size: 1rem;
  font-weight: 300;
  line-height: ${(props) => props.size};

  @media ${media.tablet} {
    line-height: 1.5;
    font-size: .8rem;
  }

`;

const FooterLogo = styled.img`
  width: 200px;
  height: auto;

  @media ${media.tablet} {
    width: 150px;
  }

  @media ${media.mobile} {
    padding-top: 2.5rem;
  }

`


//this refers to the job links 
const FooterLink = styled(StyledLink)`
  padding: 0.5rem 0;
  color: black;

  @media ${media.tablet} {
    font-size: .8rem;
  }

`;


export {
  FooterContainer,
  FooterContentContainer,
  FooterHeading,
  FooterText,
  FooterLink,
  FooterLogo
};


// Deprecated Styles - NOT USED
// const FooterInput = styled.input`
// padding-right: 2rem;
// font-family: Graphik;
// font-size: .8rem;
// font-weight: 300;
// border: none;
// margin: 0 .5rem;
// `;

// const FooterForm = styled.form`
//   display: flex;
//   flex-direction: row;
//   border: .5px solid grey;
//   width: fit-content;
//   padding: .2rem;
//   border-radius: 2rem;
// `;

// const FooterLinksContainer = styled.div`
//     margin-top: 2rem;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   padding: 0.8rem;
//   flex-grow: 6;
// `;

// const FooterNavLinks = styled.a`
//   padding: 1.5rem 0;
//   font-size: 2rem;
//   width: 50%;
//   cursor: pointer;
//   font-weight: 400;
//   text-decoration: none;
//   color: black;
// `;