import React from "react";
import Slider from "./Slider";
import { DraggableContainer } from "./style/DraggableSlider.style";

const DraggableSlider = () => {
  return (
    <DraggableContainer>
      <Slider />
    </DraggableContainer>
  );
};

export default DraggableSlider;
