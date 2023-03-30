import React, { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TabContentContainer = styled.div``;

const TabLabel = styled.label`
margin: 3rem;
padding-bottom: .25rem;
border-bottom: ${props => props.active ? '2px solid black' : '2px solid white'};
color: #03004E;
`

const TabView = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      <TabContentContainer>
        {tabs[activeTabIndex].content}
      </TabContentContainer>
      <TabContainer>
        {tabs.map((tab, index) => {
          return (
            <TabLabel key={index} onClick={() => activateTab(index)} active={activeTabIndex === index ?? true}>
              {tab.name}
            </TabLabel>
          );
        })}
      </TabContainer>
    </>
  );
};

export default TabView;
