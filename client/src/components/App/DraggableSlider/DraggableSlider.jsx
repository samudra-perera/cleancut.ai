//Need to create functionality where the mouse cursor snaps to the center of the sliderDiv onClick Event

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
  SecondaryContainer,
  MainContainer,
} from "./style/DraggableSlider.style";

const DraggableSlider = () => {
  //State for the Xvalues to pass to the clip path
  const [x, setX] = useState(0);

  //These two refs are for the container div and slider div HTML elements
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const secondaryContainerRef = useRef(null);
  //To access the click value of the slider
  const isClicked = useRef(false);

  const coords = useRef({
    startX: 0,
    lastX: 0,
  });

  //Setting the state of the sliderbar and the clip before the component renders
  useLayoutEffect(() => {
    if (containerRef.current) {
      setX(containerRef.current.clientWidth / 2);
      coords.current.startX = containerRef.current.clientWidth / 2;
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    //References to all the divs that need to be manipulated for the slider
    const container = containerRef.current;
    const maxWidth = container.clientWidth;
    const slider = sliderRef.current;
    const sliderContainer = sliderContainerRef.current;

    //The onMouseDown function is called when the userholds the draggable div, takes in the mouseEvent
    const onMouseDown = (e) => {
      //Changes the ref isClicked to true
      isClicked.current = true;
      //Sets the current Coodinates to the X position of the mouse click on screen
      coords.current.startX = e.clientX;
    };

    //The onMouseUp function is called when the user releases the draggable div, takes in a mouseEvent
    const onMouseUp = (e) => {
      //Changes ref to false
      isClicked.current = false;
      //Sets the lastX coordinates to the offset of the sliderContainer
      coords.current.lastX = sliderContainer.offsetLeft;
    };

    //The onMouseMove function is called when the user moves the mouse within the draggable div, takes in a mouseEvent
    const onMouseMove = (e) => {
      //Checks to see if onMouseDrag has toggled isClicked to be true
      if (!isClicked.current) return;

      //Calculates the nextX position based on the mouse position and the previos coordinates
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      
      //This bounds the slidercontainer to within the Draggable container
      if (nextX <= 64 || nextX > maxWidth + 64) {
        return onMouseUp();
      }
      //Add the next value as the left value to the sliderContainer
      sliderContainer.style.left = `${nextX}px`;
      //Set the X value as the right value for the leftside
      setX(maxWidth - nextX);
    };

    //On resize reset the slider
    const onResize = (e) => {
      setX(container.clientWidth/2)
      sliderContainer.style.left = `${container.clientWidth/2}px`;
    };

    //On click move the slider to the click position
    const onClick = (e) => {
      sliderContainer.style.left = `${e.x}px`;
      setX(maxWidth - e.x) 
    }

    //Adding Event listeners to the reference divs
    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseup", onMouseUp);

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);
    container.addEventListener('click', onClick)
    //This Event listener is to deal with changing window and ensuring that the slider stays in position
    window.addEventListener("resize", onResize);

    //Remove all the event listeners
    const cleanup = () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
    };

    return cleanup;
  });

  return (
    <MainContainer>
      <DraggableContainer ref={containerRef}>
        <SliderBarContainer ref={sliderContainerRef} xVal={`${x}px`}>
          <SliderBarHandler />
          <SliderCircleContainer ref={sliderRef}>
            <SliderPointerLeft />
            <SliderPointerRight />
          </SliderCircleContainer>
          <SliderBarHandler />
        </SliderBarContainer>
        <SecondaryContainer ref={secondaryContainerRef}>
          <ImageContainer>
            <BeforeImage
              src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1682365490/CleancutAssets/Screen_Shot_2023-04-02_at_9.12.38_PM_jtvnx1.png"
              style={{ clipPath: `inset(0 ${x}px 0 0)` }}
            />
            <AfterImage src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1682365550/CleancutAssets/Screen_Shot_2023-04-02_at_9.18.02_PM_ykmlra.png" />
          </ImageContainer>
        </SecondaryContainer>
      </DraggableContainer>
    </MainContainer>
  );
};

export default DraggableSlider;
