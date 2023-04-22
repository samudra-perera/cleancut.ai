import styled from "styled-components";

const SliderBarContainer = styled.div`
  height: 700px;
  left: 0;
  display: flex;
  flex-direction: column;
  place-items: center;
  position: absolute;
  width: fit-content;
`;

const SliderBarHandler = styled.div`
  height: 100%;
  flex-grow: 1;
  background-color: #3e1194;
  width: 4px;
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
  background-color: #3e1194dd;
  color: #fff;
  border: #3e1194;
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
