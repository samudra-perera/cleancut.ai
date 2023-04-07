import styled from "styled-components";

import {
  StyledContainer,
  StyledHeading,
  StyledParagraph,
} from "../../../App/CallToAction/styles/CTA.styled";

const WorkTogetherContainer = styled(StyledContainer)`
  background: linear-gradient(
    180deg,
    rgba(232, 232, 255, 1) 0%,
    rgba(241, 241, 255, 1) 100%
  );
  margin: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const WorkTogetherTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0 3rem 6rem;
`;

const WorkTogetherHeading = styled(StyledHeading)`
  font-family: Graphik-500;
  font-size: 3rem;
`;

const WorkTogetherText = styled(StyledParagraph)`
  font-size: 0.9rem;
  width: 80%;
  font-family: Graphik-400;
  line-height: 1.3rem;
`;

const WorkTogetherImageContainer = styled.div`
  margin: 3rem 6rem 3rem 0;
`;

const SpingleImage = styled.img`
    position: relative;
  width: 400px;
  height: auto;
  top: 50px;
`;

export {
  WorkTogetherContainer,
  WorkTogetherTextContainer,
  WorkTogetherHeading,
  WorkTogetherText,
  WorkTogetherImageContainer,
  SpingleImage,
};
