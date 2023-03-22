import styled from "styled-components";
import { StyledContainer, StyledHeading, StyledLink } from "../../CallToAction/styles/CTA.styled";

const FAQLink = styled(StyledLink)`
  font-size: 1.1rem;
  font-weight: 300;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const FAQContainerMain = styled.div`
    background-color: #A09DE4;
`

const FAQContainerSecondary = styled(StyledContainer)`
    margin-bottom: 0rem;
`

const FAQHeading = styled(StyledHeading)`
    color: #03004e;
    margin-top: 4.5rem;
    font-weight: 600;
    font-size: 4rem;
`

export { FAQContainerMain, FAQLink, FAQHeading, FAQContainerSecondary };
