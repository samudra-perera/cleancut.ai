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
    const maxWidth = container.clientWidth;
    const slider = sliderRef.current;
    const sliderContainer = sliderContainerRef.current;

    //Compute the width where the client needs to stop
    const rightMax = maxWidth + slider.clientWidth / 2;
    const leftMax = 0 - slider.clientWidth / 2;

    const onMouseDown = (e) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
    };

    const onMouseUp = (e) => {
      isClicked.current = false;
      coords.current.lastX = sliderContainer.offsetLeft;
      console.log(coords);
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;

      sliderContainer.style.left = `${nextX}px`;
    };

    const onMouseClick = (e) => {
      console.log('yes')
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mouseleave", onMouseUp);

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);
    container.addEventListener('click', onMouseClick)

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
