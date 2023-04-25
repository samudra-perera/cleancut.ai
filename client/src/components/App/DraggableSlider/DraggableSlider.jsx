//Need to create functionality where the mouse cursor snaps to the center of the sliderDiv
//When screen resizes set the state for the x value of the slider to be at the midway point

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import {
  SliderBarContainer,
  SliderBarHandler,
  SliderCircleContainer,
  SliderPointerLeft,
  SliderPointerRight,
} from "./style/Slider.style";
import {
  DraggableContainer,
  BeforeImage,
  AfterImage,
  ImageContainer,
} from "./style/DraggableSlider.style";

const DraggableSlider = () => {
  //State for the Xvalues to pass to the clip path
  const [x, setX] = useState(0);

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

  //Setting the state of the sliderbar and the clip before the component renders
  useLayoutEffect(() => {
    if(containerRef.current) {
      setX(containerRef.current.clientWidth/2)
      coords.current.startX = containerRef.current.clientWidth/2
    }
  }, [])

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
      console.log(coords.current);
    };

    //The onMouseMove function is called when the user moves the mouse within the draggable div, takes in a mouseEvent
    const onMouseMove = (e) => {
      //Checks to see if onMouseDrag has toggled isClicked to be true
      if (!isClicked.current) return;

      //Calculates the nextX position based on the mouse position and the previos coordinates
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      console.log(nextX);
      //This bounds the slidercontainer to within the Draggable container
      if (nextX <= 0 || nextX > maxWidth) {
        return onMouseUp();
      }
      //Add the next value as the left value to the sliderContainer
      sliderContainer.style.left = `${nextX}px`;
      //Set the X value as the right value for the leftside
      setX(maxWidth - nextX);
    };

    //Adding Event listeners to the reference divs
    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseup", onMouseUp);

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    //Remove all the event listeners
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
      <SliderBarContainer ref={sliderContainerRef} xVal={`${x}px`}>
        <SliderBarHandler />
        <SliderCircleContainer ref={sliderRef}>
          <SliderPointerLeft />
          <SliderPointerRight />
        </SliderCircleContainer>
        <SliderBarHandler />
      </SliderBarContainer>
      <BeforeImage
        src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1682365490/CleancutAssets/Screen_Shot_2023-04-02_at_9.12.38_PM_jtvnx1.png"
        style={{ clipPath: `inset(0 ${x}px 0 0)` }}
      />
      <AfterImage src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1682365550/CleancutAssets/Screen_Shot_2023-04-02_at_9.18.02_PM_ykmlra.png" />
    </DraggableContainer>
  );
};

export default DraggableSlider;
