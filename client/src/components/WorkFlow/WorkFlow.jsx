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
    <>
      <WorkFlowContainer>
        <WorkFlowHeaderContainer>
          <HeaderTag text={"The Future of Video Editing is Now"} />
          <WorkFlowHeading>Springle Elevates Your WorkFlow</WorkFlowHeading>
        </WorkFlowHeaderContainer>
        {WorkFlowData.map((card) => {
          return <WorkFlowCard>1</WorkFlowCard>;
        })}
      </WorkFlowContainer>
    </>
  );
};

export default WorkFlow;
