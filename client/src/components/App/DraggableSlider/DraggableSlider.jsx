//Need to create functionality where the mouse cursor snaps to the center of the sliderDiv onClick Event
//Need to handle resizing the slider and clip position

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

  //These refs are for the container div, slider div, and slider components HTML elements
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const secondaryContainerRef = useRef(null);
  const beforeImageRef = useRef(null);
  const sliderBarRefTop = useRef(null);
  const sliderBarRefBottom = useRef(null);
  //To access the click value of the slider
  const isClicked = useRef(false);

  //StartX is the starting coordinate
  //lastX is the coordinate where the slider moves to
  //nextX is a copy of lastX
  const coords = useRef({
    startX: 0,
    lastX: 0,
    nextX: 0,
    startXCopy: 0,
  });

  //Setting the state of the sliderbar and the clip before the component renders
  useLayoutEffect(() => {
    if (containerRef.current) {
      const start = containerRef.current.clientWidth / 2;
      setX(start);
      coords.current.startX = start;
      coords.current.lastX = start;
      coords.current.nextX = start;
      coords.current.startXCopy = start;
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    //References to all the divs that need to be manipulated for the slider
    const container = containerRef.current;
    let maxWidth = container.clientWidth;
    const slider = sliderRef.current;
    const sliderContainer = sliderContainerRef.current;
    const beforeImage = beforeImageRef.current;
    const sliderBarTop = sliderBarRefTop.current;
    const sliderBarBottom = sliderBarRefBottom.current;

    //The onMouseDown function is called when the userholds the draggable div, takes in the mouseEvent
    const onMouseDown = (e) => {
      //Changes the ref isClicked to true
      isClicked.current = true;
      //Sets the current Coodinates to the X position of the mouse click on screen
      coords.current.startX = e.clientX;
      coords.current.startXCopy = e.clientX;
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

      //Calculates the nextX position based on the mouse position and the previous coordinates
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      coords.current.nextX = nextX;

      //This bounds the slidercontainer to within the Draggable container
      if (nextX <= 64 || nextX > maxWidth + 64) {
        return onMouseUp();
      }
      //Add the next value as the left value to the sliderContainer
      sliderContainer.style.left = `${nextX}px`;
      //Set the X value as the right value for the leftside
      beforeImage.style.clipPath = `inset(0 ${maxWidth - nextX}px 0 0)`;
    };

    //On resize reset the slider
    //Calculate the ratio of the maxWidth vs the positon of the slider bar then update the ratio for the new width
    //Edge case of when the slider leaves the
    const onResize = (e) => {
      maxWidth = container.clientWidth;
      const last = coords.current.nextX;
      const start = coords.current.startXCopy;
      let ratio = last / maxWidth;
      //To handle edge cases of last being larger than the maxwidth and when last becomes so much smaller than maxWidth
      if (ratio > 1) {
        ratio = ratio - 0.3;
      } else if (ratio < 0.3) {
        ratio = ratio + 0.3;
      }

      console.log(ratio);
      coords.current.lastX = last * ratio;
      coords.current.startX = start * ratio;
      beforeImage.style.clipPath = `inset(0 ${
        maxWidth - coords.current.lastX
      }px 0 0)`;
      sliderContainer.style.left = `${coords.current.lastX}px`;
      // coords.current.startX = container.clientWidth/2;
      // coords.current.lastX = container.clientWidth/2;
    };

    //On click move the slider to the click position
    const onClick = (e) => {
      // console.log('click')
    };

    //Adding Event listeners to the reference divs
    slider.addEventListener("pointerdown", onMouseDown);
    // slider.addEventListener("mouseup", onMouseUp);
    sliderBarTop.addEventListener("pointerdown", onMouseDown);
    sliderBarBottom.addEventListener("pointerdown", onMouseDown);

    container.addEventListener("pointerup", onMouseUp);
    container.addEventListener("pointermove", onMouseMove);
    container.addEventListener("pointerleave", onMouseUp);
    container.addEventListener("click", onClick);
    //This Event listener is to deal with changing window and ensuring that the slider stays in position
    window.addEventListener("resize", onResize);

    //Remove all the event listeners
    const cleanup = () => {
      container.removeEventListener("pointermove", onMouseMove);
      container.removeEventListener("pointerleave", onMouseUp);
      container.removeEventListener("click", onClick);
      container.removeEventListener("pointerup", onMouseUp);
      slider.removeEventListener("pointerdown", onMouseDown);
      // slider.removeEventListener("mouseup", onMouseUp);
      sliderBarBottom.removeEventListener("pointerdown", onMouseDown);
      sliderBarTop.removeEventListener("pointerdown", onMouseDown);
      window.removeEventListener("resize", onResize);
    };

    return cleanup;
  });

  return (
    <MainContainer>
      <DraggableContainer ref={containerRef}>
        <SliderBarContainer ref={sliderContainerRef} xVal={`${x}px`}>
          <SliderBarHandler ref={sliderBarRefTop} />
          <SliderCircleContainer ref={sliderRef}>
            <SliderPointerLeft />
            <SliderPointerRight />
          </SliderCircleContainer>
          <SliderBarHandler ref={sliderBarRefBottom} />
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
