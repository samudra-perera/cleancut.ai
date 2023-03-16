import React from "react";
import {
  WorkFlowContainer,
  WorkFlowHeaderContainer,
} from "./styles/Workflow.styles";
import HeaderTag from "../HeaderTag";

const WorkFlow = () => {
  return (
    <>
      <WorkFlowContainer>
        <WorkFlowHeaderContainer>
          <HeaderTag text={"The Future of Video Editing is Now"} />
        </WorkFlowHeaderContainer>
      </WorkFlowContainer>
    </>
  );
};

export default WorkFlow;
