import styled from "styled-components";


//Translate = container margin + 1/2 slider container width
const SliderBarContainer = styled.div`
  height: 100%;
  left: ${props => props.xVal || '150px'};
  display: flex;
  flex-direction: column;
  place-items: center;
  position: absolute;
  width: fit-content;
  transform: translateX(-5.75rem);
  pointer-events: all;
  z-index: 14;
`;

const SliderBarHandler = styled.div`
  height: 100%;
  flex-grow: 1;
  background-color: #000;
  width: 4px;
  cursor: ew-resize;
`;
const SliderCircleContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  place-content: center;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border-width: 2px;
  pointer-events: auto;
  background-color: #000;
  color: #fff;
  border: #000;
  cursor: ew-resize;
`;

const SliderPointerLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 10px solid;
  border-bottom: 8px solid transparent;
`;

const SliderPointerRight = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 10px solid;
  border-bottom: 8px solid transparent;
  transform: rotate(180deg);
`;

export {
  SliderBarContainer,
  SliderBarHandler,
  SliderCircleContainer,
  SliderPointerLeft,
  SliderPointerRight,
};
