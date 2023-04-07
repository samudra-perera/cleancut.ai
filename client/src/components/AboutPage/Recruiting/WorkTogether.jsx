import React from "react";
import {
  WorkTogetherContainer,
  WorkTogetherTextContainer,
  WorkTogetherHeading,
  WorkTogetherText,
  WorkTogetherImageContainer,
  SpingleImage,
} from "./WorkTogether.style.js/WorkTogether.style";
import HeaderTag from "../../SharedComponents/HeaderTag";
import { jobs } from "../../SharedComponents/Footer/Home/JobOpenings";
import { FooterLink } from "../../SharedComponents/Footer/styles/Footer.styles";
import ApplyCard from "./ApplyCard";



const WorkTogether = () => {
  return (
    <WorkTogetherContainer>
      <WorkTogetherTextContainer>
        <HeaderTag text={"Join Us"} />
        <WorkTogetherHeading>Let’s Work Together</WorkTogetherHeading>
        <WorkTogetherText>
          We’re looking for talented, creatives to join the future of
          storytelling. Join us in our mission to deliver experiences that
          simplify the lives of Storyteller.
        </WorkTogetherText>
        {jobs.map((job, index) => {
          return (
            <FooterLink href={job.url} key={index}>
              {job.title}
            </FooterLink>
          );
        })}
      </WorkTogetherTextContainer>
      <WorkTogetherImageContainer>
        <ApplyCard/>
        <SpingleImage src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1680855997/CleancutAssets/Spingle_sjl4pt.png"/>
      </WorkTogetherImageContainer>
    </WorkTogetherContainer>
  );
};

export default WorkTogether;
