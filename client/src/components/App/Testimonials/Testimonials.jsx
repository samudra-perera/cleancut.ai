import React from "react";
import { TestimonialInformation } from "./TestimonialInformation";
import { TestimonialContainer, TestimonialHeader, TestimonialCardContainer, TestimonialDivider } from "./style/Testimonials.style";
import TestimonialCard from "./TestimonialCard";



const Testimonials = () => {
  return (
    <TestimonialContainer>
      <TestimonialDivider />
      <TestimonialHeader>
      Join Creatives Embracing Cleancut For Efficient Editing And Better Storytelling.
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
