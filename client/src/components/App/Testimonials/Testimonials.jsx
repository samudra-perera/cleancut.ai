import React from "react";
import { TestimonialInformation } from "./TestimonialInformation";
import { TestimonialContainer, TestimonialHeader, TestimonialCardContainer } from "./style/Testimonials.style";
import TestimonialCard from "./TestimonialCard";



const Testimonials = () => {
  return (
    <TestimonialContainer>
      <TestimonialHeader>
      Join creatives embracing Cleancut for efficient editing and better storytelling.
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
