import React from "react";
import styled from "styled-components";

const imageURL = [
  {
    software: "Davinci",
    url: "https://res.cloudinary.com/dkrjwbr8w/image/upload/v1681838960/CleancutAssets/image_4_mlakno.png",
  },
  {
    software: "Premier Pro",
    url: "https://res.cloudinary.com/dkrjwbr8w/image/upload/v1681838958/CleancutAssets/image_1_wtb9g4.png",
  },
  {
    software: "Final Cut",
    url: "https://res.cloudinary.com/dkrjwbr8w/image/upload/v1681838957/CleancutAssets/2015_Final_Cut_Pro_Logo_1_hov43z.png",
  },
];

const SoftwareContainer = styled.div`
  display: flex;
`;

const SoftwareImage = styled.img`
  width: 31px;
  height: 31px;
  margin: 0 0.25rem;
`;

const SoftwareSection = () => {
  return (
    <SoftwareContainer>
      {imageURL.map((software, index) => {
        return (
          <SoftwareImage
            src={software.url}
            alt={software.software}
            key={index}
          />
        );
      })}
    </SoftwareContainer>
  );
};

export default SoftwareSection;
