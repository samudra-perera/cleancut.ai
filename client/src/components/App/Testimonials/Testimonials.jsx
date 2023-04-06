import React from "react";
import { TestimonialInformation } from "./TestimonialInformation";
import { TestimonialContainer, TestimonialHeader, TestimonialCardContainer } from "./style/Testimonials.style";
import styled from "styled-components";
import TestimonialCard from "./TestimonialCard";



const Testimonials = () => {
  return (
    <TestimonialContainer>
      <TestimonialHeader>
        Join others in using CleanCut today to blah blah blah it’s the best
        thing to use and save your time
      </TestimonialHeader>
      <TestimonialCardContainer>
        {TestimonialInformation.map((testimonial, index) => {
          return (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              avatarURL={testimonial.avatarURL}
              span={testimonial.span}
            />
          );
        })}
      </TestimonialCardContainer>
    </TestimonialContainer>
  );
};

export default Testimonials;
