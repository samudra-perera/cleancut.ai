import styled from "styled-components";
import { StyledHeading, StyledLink } from "../../CallToAction/styles/CTA.styled";

const FAQLink = styled(StyledLink)`
  font-size: 1.1rem;
  font-weight: 300;
`;

const FAQContainer = styled.div`
    width: 100vw;
    background-color: #A09DE4;
`

const FAQHeading = styled(StyledHeading)`
    color: #03004e;
    margin-top: 4.5rem;
    font-weight: 600;
    font-size: 4rem;
`

export { FAQContainer, FAQLink, FAQHeading };
