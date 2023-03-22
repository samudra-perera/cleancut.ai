import styled from "styled-components";
import {
  StyledContainer,
  StyledHeading,
} from "../../CallToAction/styles/CTA.styled";

const WorkFlowContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(251, 251, 255, 1) 0%,
    rgba(231, 230, 253, 1) 50%,
    rgba(155, 152, 226, 1) 100%
  );

  height: fit-content;
`;
const WorkFlowHeaderContainer = styled(StyledContainer)`
  height: fit-content;
`;

const WorkFlowHeading = styled(StyledHeading)`
  color: #03004e;
  width: 60%;
  text-transform: uppercase;
  margin-top: 0.5rem;
  line-height: 1.3;
`;

export { WorkFlowContainer, WorkFlowHeaderContainer, WorkFlowHeading };
