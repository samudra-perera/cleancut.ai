import React from "react";
import {
  WorkFlowContainer,
  WorkFlowHeaderContainer,
  WorkFlowHeading,
} from "./styles/Workflow.styles";
import HeaderTag from "../../SharedComponents/HeaderTag";
import { WorkFlowData } from "./WorkFlowData";
import WorkFlowCard from "./WorkFlowCard";
import Testimonials from "../Testimonials/Testimonials";

const WorkFlow = () => {
  return (
    <WorkFlowContainer>
      <WorkFlowHeaderContainer>
        <HeaderTag text={"The Future of Video Editing is Now"} />
        <WorkFlowHeading>Springle Elevates Your WorkFlow</WorkFlowHeading>
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
          />
        );
      })}
      <Testimonials />
    </WorkFlowContainer>
  );
};

export default WorkFlow;