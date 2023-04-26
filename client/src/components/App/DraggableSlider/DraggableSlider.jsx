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
  const beforeImageRef = useRef(null)
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
    const beforeImage = beforeImageRef.current

    //The onMouseDown function is called when the userholds the draggable div, takes in the mouseEvent
    const onMouseDown = (e) => {
      //Changes the ref isClicked to true
      isClicked.current = true;
      //Sets the current Coodinates to the X position of the mouse click on screen
      coords.current.startX = e.clientX;
      console.log(`StartX: ${coords.current.startX}`)
    };

    //The onMouseUp function is called when the user releases the draggable div, takes in a mouseEvent
    const onMouseUp = (e) => {
      //Changes ref to false
      isClicked.current = false;
      //Sets the lastX coordinates to the offset of the sliderContainer
      coords.current.lastX = sliderContainer.offsetLeft;
      console.log(`LastX: ${coords.current.lastX}`)
    };

    //The onMouseMove function is called when the user moves the mouse within the draggable div, takes in a mouseEvent
    const onMouseMove = (e) => {
      //Checks to see if onMouseDrag has toggled isClicked to be true
      if (!isClicked.current) return;

      //Calculates the nextX position based on the mouse position and the previous coordinates
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      
      //This bounds the slidercontainer to within the Draggable container
      if (nextX <= 64 || nextX > maxWidth + 64) {
        return onMouseUp();
      }
      //Add the next value as the left value to the sliderContainer
      sliderContainer.style.left = `${nextX}px`;
      //Set the X value as the right value for the leftside
      beforeImage.style.clipPath = `inset(0 ${maxWidth - nextX}px 0 0)`
    };

    //On resize reset the slider
    const onResize = (e) => {
      beforeImage.style.clipPath = `inset(0 ${container.clientWidth/2}px 0 0)`
      sliderContainer.style.left = `${container.clientWidth/2}px`;
    };

    //On click move the slider to the click position
    const onClick = (e) => {
      // coords.current.startX = e.offsetX;
      // coords.current.lastX = sliderContainer.offsetLeft;
      // const nextX = e.offsetX + 128
      // sliderContainer.style.left = `${nextX}px`;
      // setX(maxWidth - nextX)
      // console.log(coords.current)
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
      container.removeEventListener('click', onClick)
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
              ref={beforeImageRef}
            />
            <AfterImage src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1682365550/CleancutAssets/Screen_Shot_2023-04-02_at_9.18.02_PM_ykmlra.png" />
          </ImageContainer>
        </SecondaryContainer>
      </DraggableContainer>
    </MainContainer>
  );
};

export default DraggableSlider;
