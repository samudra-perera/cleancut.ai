import React from "react";
import { CardContainer } from "./WorkTogether.style.js/ApplyCard.style";
import { LogoImage } from "../../SharedComponents/nav/styles/Nav.styled";
import Button from "../../SharedComponents/Button";

const ApplyCard = () => {
  return (
    <CardContainer>
      <LogoImage
        src="https://res.cloudinary.com/dkrjwbr8w/image/upload/v1680553851/CleancutAssets/cleancut_logo_lxt0hp.png"
        alt="Cleancut.ai Logo"
      />
      <Button text={"Apply"} colour={"#FF4F51"} />
    </CardContainer>
  );
};

export default ApplyCard;
