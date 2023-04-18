import React from "react";
import {
  WorkFlowContainer,
  WorkFlowHeaderContainer,
  WorkFlowHeading,
  ContainerContainer,
} from "./styles/Workflow.styles";
import HeaderTag from "../../SharedComponents/HeaderTag";
import { WorkFlowData } from "./WorkFlowData";
import WorkFlowCard from "./WorkFlowCard";
import Testimonials from "../Testimonials/Testimonials";
import DraggableSlider from "../DraggableSlider/DraggableSlider";

const WorkFlow = () => {
  return (
    <ContainerContainer>
      <WorkFlowContainer>
        {/* <DraggableSlider /> */}
        <WorkFlowHeaderContainer>
          <HeaderTag text={"The Future of Video Editing is Now"} />
          <WorkFlowHeading>Work At The Speed of Creativity</WorkFlowHeading>
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
            />
          );
        })}
        <Testimonials />
      </WorkFlowContainer>
    </ContainerContainer>
  );
};

export default WorkFlow;
