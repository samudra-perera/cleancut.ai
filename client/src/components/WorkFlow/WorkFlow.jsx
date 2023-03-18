import React from "react";
import {
  WorkFlowContainer,
  WorkFlowHeaderContainer,
  WorkFlowHeading,
} from "./styles/Workflow.styles";
import HeaderTag from "../HeaderTag";
import { WorkFlowData } from "./WorkFlowData";
import WorkFlowCard from "./WorkFlowCard";

const WorkFlow = () => {
  return (
    <WorkFlowContainer>
      <WorkFlowHeaderContainer>
        <HeaderTag text={"The Future of Video Editing is Now"} />
        <WorkFlowHeading>Springle Elevates Your WorkFlow</WorkFlowHeading>
      </WorkFlowHeaderContainer>
      {WorkFlowData.map((card) => {
        return (
          <WorkFlowCard
            heading={card.heading}
            direction={card.direction}
            step={card.step}
            align={card.align}
            alignItems={card.alignItems}
            explaination={card.explanation}
          />
        );
      })}
    </WorkFlowContainer>
  );
};

export default WorkFlow;
