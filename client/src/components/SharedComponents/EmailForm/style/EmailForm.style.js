import styled from "styled-components";
import { media } from "../../../../style/media";

const EmailInput = styled.input`
  width: 250px;
  font-family: Graphik-300;
  font-size: 1rem;
  border: none;
  border-radius: 2rem 0 0 2rem;
  position: relative;
  padding-left: 0.7rem;
  :focus {
    outline: none;
  }

  @media ${media.laptop} {
    width: 210px;
  }
`;

const MailForm = styled.div`
  display: flex;
  flex-direction: row;
  border: 0.5px solid;
  border-color: ${props => props.colour || '#721ED8'};
  width: fit-content;
  padding: 0.12rem;
  border-radius: 2rem;
  background-color: white;
  
  @media ${media.tablet} {
    display: ${props => props.responsive || 'flex'}
  }

`;

const StyledButton = styled.button`
  background-color: ${props => props.colour || '#721ED8'};
  font-size: 0.8rem;
  padding: .7rem 2rem;
  color: white;
  text-decoration: none;
  border-radius: 2rem;
  font-family: Graphik-500;
  cursor: pointer;
  border: none;
`;

const ResponseMessage = styled.p`
  font-size: .7rem;
  margin-top: .3rem;
`

export {StyledButton, MailForm, EmailInput, ResponseMessage}