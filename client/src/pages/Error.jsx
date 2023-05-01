import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackgroundContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dkrjwbr8w/image/upload/v1682972783/CleancutAssets/404wSpingle_i5qxx4.png");
  height: 100vh;
  width: 100vw;
  display: flex;
`;
const ErrorContainer = styled.div`
  display: flex;
  max-width: 1800px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;
const ErrorHeading = styled.h1`
  color: white;
  font-family: Graphik-700;
  font-size: 22rem;
  text-align: center;
  margin: 7rem 0 3rem;
`;

const ErrorText = styled.p`
  color: white;
  font-family: Graphik-500;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const ErrorButton = styled.a`
  color: #f43736;
  background-color: white;
  font-family: Graphik-500;
  padding: 0.75rem 1.5rem;
  border: #f43736 2px solid;
  border-radius: 2rem;
`;

const Error = () => {
  return (
    <BackgroundContainer>
      <ErrorContainer>
        <ErrorHeading>404</ErrorHeading>
        <ErrorText>
          Uh-oh! You found Spingle in the multiverse! The page you’re looking
          for doesn’t exist.
        </ErrorText>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ErrorButton>Return Home</ErrorButton>
        </Link>
      </ErrorContainer>
    </BackgroundContainer>
  );
};

export default Error;
