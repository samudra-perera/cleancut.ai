import styled from "styled-components";
import { media } from "../../../../style/media";
import {
  StyledContainer,
  StyledHeading,
  StyledParagraph,
} from "../../CallToAction/styles/CTA.styled";

const MeetSpingleContainer = styled(StyledContainer)`
  background-color: #bdbafa;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const SpingleImage = styled.img`
  height: auto;
  width: 350px;
  max-width: 350px;
  padding: 7rem 0;
  flex-grow: 1;
  margin-right: 4rem;

  @media ${media.laptopLarge} {
    margin-right: 2rem;
  }

  @media ${media.tablet} {
    margin: 0;
    padding: 3rem 0;
  }


`;

const MeetSpingleTextContainer = styled.div`
  padding: 4rem;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${media.laptopLarge} {
    padding: 2rem;
  }

  @media ${media.tablet} {
    width: 100%;
    align-items: baseline;
  }

`;

const MeetSpingleHeading = styled(StyledHeading)`
  font-family: Graphik-500;
  font-size: 3rem;
  line-height: 3.5rem;
  padding-bottom: 2rem;

  @media ${media.laptopLarge} {
    font-size: 2.5rem;
    line-height: 3rem;
  }

`;

const MeetSpingleText = styled(StyledParagraph)`
  margin: 0;
  padding-bottom: 3rem;
  line-height: 1.5rem;

  @media ${media.laptopLarge} {
    font-size: 1rem;
  }

  @media ${media.tablet} {
    padding-bottom: 1.5rem;
  }

`;

export {
  MeetSpingleContainer,
  SpingleImage,
  MeetSpingleTextContainer,
  MeetSpingleHeading,
  MeetSpingleText,
};
