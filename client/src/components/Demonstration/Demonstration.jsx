import React from "react";
import {
  WorkFlowHeading,
  WorkFlowHeaderContainer,
} from "../WorkFlow/styles/Workflow.styles";
import HeaderTag from "../HeaderTag";
import { DemonstrationContainer } from "./style/Demonstration.style";
import TabView from "./TabView";
import TabContent from "./TabContent";

const Demonstration = () => {
  return (
    <DemonstrationContainer>
      <WorkFlowHeaderContainer>
        <HeaderTag text={"Focus on the storytelling"} color={"#F8705D"} />
        <WorkFlowHeading>Work Smarter Not Harder</WorkFlowHeading>
      </WorkFlowHeaderContainer>
      <TabView tabs={[
    {name: 'Camera Motion', content: <TabContent index={'1'}/>},
    {name: 'Lighting', content: <TabContent index={'2'}/>},
    {name: 'Composition', content: <TabContent index={'3'}/>},
]}/>
    </DemonstrationContainer>
  );
};

export default Demonstration;
