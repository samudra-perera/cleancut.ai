import React, { useEffect, useRef } from "react";
import {
  SliderBarContainer,
  SliderBarHandler,
  SliderCircleContainer,
  SliderPointerLeft,
  SliderPointerRight,
} from "./style/Slider.style";
import { DraggableContainer } from "./style/DraggableSlider.style";

const DraggableSlider = () => {
  //These two refs are for the container div and slider div HTML elements
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderContainerRef = useRef(null);
  //To access the click value of the slider
  const isClicked = useRef(false);

  const coords = useRef({
    startX: 0,
    lastX: 0,
  });

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const container = containerRef.current;
    const slider = sliderRef.current;
    const sliderContainer = sliderContainerRef.current;

    const onMouseDown = (e) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      console.log(coords.current);
    };

    const onMouseUp = (e) => {
      isClicked.current = false;
      coords.current.lastX = sliderContainer.offsetLeft;
      console.log(isClicked.current);
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;

      sliderContainer.style.left = `${nextX}px`;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseup", onMouseUp);

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseup", onMouseUp);
    };

    return cleanup;
  });

  return (
    <DraggableContainer ref={containerRef}>
      <SliderBarContainer ref={sliderContainerRef}>
        <SliderBarHandler />
        <SliderCircleContainer ref={sliderRef}>
          <SliderPointerLeft />
          <SliderPointerRight />
        </SliderCircleContainer>
        <SliderBarHandler />
      </SliderBarContainer>
    </DraggableContainer>
  );
};

export default DraggableSlider;
