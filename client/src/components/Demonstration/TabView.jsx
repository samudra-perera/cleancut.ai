import React, { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TabContentContainer = styled.div``;

const TabLabel = styled.label`
margin: 1rem;
border-bottom: ${props => props.active ? '1px solid black' : '1px solid white'};
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
