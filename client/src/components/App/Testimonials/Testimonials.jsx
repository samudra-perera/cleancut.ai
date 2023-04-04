import React from "react";
import { TestimonialInformation } from "./TestimonialInformation";
import { StyledContainer } from "../CallToAction/styles/CTA.styled";
import styled from "styled-components";
import TestimonialCard from "./TestimonialCard";

const TestimonialContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

const TestimonialHeader = styled.h3`
  font-family: Graphik-400;
  font-size: 3rem;
  width: 90%;
  text-align: center;
`;

const TestimonialCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 4rem 3rem;
`;

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
