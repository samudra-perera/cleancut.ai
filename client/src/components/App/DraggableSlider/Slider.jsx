import React, { useEffect, useRef } from "react";
import {
  SliderBarContainer,
  SliderBarHandler,
  SliderCircleContainer,
  SliderPointerLeft,
  SliderPointerRight,
} from "./style/Slider.style";

const Slider = () => {
  const sliderRef = useRef(null);
  const isClicked = useRef(false);
  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const onMouseDown = () => {
      isClicked.current = true;
    };

    const onMouseUp = () => {
      isClicked.current = false;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseup", onMouseUp);

    const cleanup = () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseup", onMouseUp);
    };
    
    return cleanup;
  }, []);

  return (
    <SliderBarContainer ref={sliderRef}>
      <SliderBarHandler />
      <SliderCircleContainer>
        <SliderPointerLeft />
        <SliderPointerRight />
      </SliderCircleContainer>
      <SliderBarHandler />
    </SliderBarContainer>
  );
};

export default Slider;
