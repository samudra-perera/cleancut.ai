import React, {useEffect, useRef} from "react";
import Slider from "./Slider";
import { DraggableContainer } from "./style/DraggableSlider.style";

const DraggableSlider = () => {
  const containerRef = useRef(null)

  return (
    <DraggableContainer ref={containerRef}>
      <Slider/>
    </DraggableContainer>
  );
};

export default DraggableSlider;
