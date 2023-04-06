import styled from "styled-components";
import { media } from "../../../../style/media";
import {
  StyledContainer,
  StyledHeading,
} from "../../CallToAction/styles/CTA.styled";

const WorkFlowContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(189, 186, 255, 1) 40%,
    rgba(189, 186, 255, 1) 70%,
    rgba(241, 241, 255, 1) 100%
  );

  height: fit-content;
`;
const WorkFlowHeaderContainer = styled(StyledContainer)`
  height: fit-content;
  margin-top: 0;
  padding-bottom: 10rem;
`;

const WorkFlowHeading = styled(StyledHeading)`
  font-family: Graphik-600;
  width: 100%;
  font-size: 3.5rem;
  line-height: 1.3;
  margin: 0;

  @media ${media.tablet} {
    width: 100%;
    font-size: 2rem;
    text-align: center;
  }
`;

export { WorkFlowContainer, WorkFlowHeaderContainer, WorkFlowHeading };
