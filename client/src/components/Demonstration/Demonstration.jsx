import React from "react";
import {
  WorkFlowHeading,
  WorkFlowHeaderContainer,
} from "../WorkFlow/styles/Workflow.styles";
import HeaderTag from "../HeaderTag";
import { DemonstrationContainer } from "./style/Demonstration.style";
import TabView from "./TabView";
import TabContent from "./TabContent";
import { tabInformation } from './TabInformation'

const Demonstration = () => {
  return (
    <DemonstrationContainer>
      <WorkFlowHeaderContainer>
        <HeaderTag text={"Focus on the storytelling"} color={"#F8705D"} />
        <WorkFlowHeading>Work Smarter Not Harder</WorkFlowHeading>
      </WorkFlowHeaderContainer>
      <TabView tabs={[
    {name: 'Camera Motion', content: <TabContent content={tabInformation[0]}/>},
    {name: 'Lighting', content: <TabContent content={tabInformation[1]}/>},
    {name: 'Composition', content: <TabContent content={tabInformation[2]}/>},
]}/>
    </DemonstrationContainer>
  );
};

export default Demonstration;
