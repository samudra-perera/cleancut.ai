// import React, { useEffect, useRef } from "react";
//Deprecated this component

// import { forwardRef } from "react";

// //The ref in the forwardedRef is referring to the slider click value
// const Slider = forwardRef(function Slider(props, ref) {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     if (!sliderRef.current) return;

//     const slider = sliderRef.current;

//     const onMouseDown = (e) => {
//       ref.current = true;
//       console.log(ref)
//     };

//     const onMouseUp = (e) => {
//       ref.current = false;
//       console.log(ref)
//     };

//     slider.addEventListener("mousedown", onMouseDown);
//     slider.addEventListener("mouseup", onMouseUp);

//     const cleanup = () => {
//       slider.removeEventListener("mousedown", onMouseDown);
//       slider.removeEventListener("mouseup", onMouseUp);
//     };

//     return cleanup;
//   }, []);

//   return (
//     <SliderBarContainer ref={sliderRef}>
//       <SliderBarHandler />
//       <SliderCircleContainer>
//         <SliderPointerLeft />
//         <SliderPointerRight />
//       </SliderCircleContainer>
//       <SliderBarHandler />
//     </SliderBarContainer>
//   );
// });

// export default Slider;
