//Need to create functionality where the mouse cursor snaps to the center of the sliderDiv

import React, { useEffect, useRef, useState } from "react";
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
    startX: 300,
    lastX: 0,
  });

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const container = containerRef.current;
    const maxWidth = container.clientWidth;
    const slider = sliderRef.current;
    const sliderContainer = sliderContainerRef.current;


    //The onMouseDown function is called when the userholds the draggable div, takes in the mouseEvent
    const onMouseDown = (e) => {
      //Changes the ref isClicked to true
      isClicked.current = true;
      //Sets the current Coodinates to the X position of the mouse click
      coords.current.startX = e.clientX;
    };

    //The onMouseUp function is called when the user releases the draggable div, takes in a mouseEvent
    const onMouseUp = (e) => {
      isClicked.current = false;
      coords.current.lastX = sliderContainer.offsetLeft;
      console.log(coords.current)
    };

    //The onMouseMove function is called when the user moves the mouse within the draggable div, takes in a mouseEvent
    const onMouseMove = (e) => {
      //Checks to see if onMouseDrag has toggled isClicked to be true
      if (!isClicked.current) return;

      //Calculates the nextX position based on the mouse position and the previos coordinates
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      console.log(nextX)
      //This bounds the slidercontainer to within the Draggable container  
      if (nextX <= 0 || nextX > maxWidth) {
        return onMouseUp()
      }

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
