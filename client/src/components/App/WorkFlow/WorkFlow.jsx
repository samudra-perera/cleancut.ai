import React from "react";
import {
  WorkFlowContainer,
  WorkFlowHeaderContainer,
  WorkFlowHeading,
  ContainerContainer,
  WorkFlowParagraph,
} from "./styles/Workflow.styles";
import HeaderTag from "../../SharedComponents/HeaderTag";
import { WorkFlowData } from "./WorkFlowData";
import WorkFlowCard from "./WorkFlowCard";
import Testimonials from "../Testimonials/Testimonials";
import DraggableSlider from "../DraggableSlider/DraggableSlider";
import SocialBanner from "../SocialBanner/SocialBanner";

const WorkFlow = () => {
  return (
    <ContainerContainer>
      <WorkFlowContainer>
        <DraggableSlider />
        <SocialBanner />
        <WorkFlowHeaderContainer>
          <HeaderTag text={"The Future of Video Editing is Now"} />
          <WorkFlowHeading>Work At The Speed of Creativity</WorkFlowHeading>
          <WorkFlowParagraph>
            Unleash your creative potential with faster, more efficient video
            editing. Say goodbye to tedious tasks and hello to more time for
            storytelling.
          </WorkFlowParagraph>
        </WorkFlowHeaderContainer>
        {WorkFlowData.map((card, index) => {
          return (
            <WorkFlowCard
              key={index}
              heading={card.heading}
              direction={card.direction}
              step={card.step}
              align={card.align}
              alignItems={card.alignItems}
              explanation={card.explanation}
              borderRadius={card.borderRadius}
              gifLink={card.gifLink}
              marginBottom={card.marginBottom}
              alt={card.alt}
            />
          );
        })}
        <Testimonials />
      </WorkFlowContainer>
    </ContainerContainer>
  );
};

export default WorkFlow;
