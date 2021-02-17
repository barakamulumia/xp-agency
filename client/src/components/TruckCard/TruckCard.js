import React from "react";
import { Image } from "../index";
import { CardContainer, Timeline } from "./TruckCard.elements";

const TruckCard = () => {
  return (
    <CardContainer>
      <Image
        src="https://i.postimg.cc/vHRBfYDN/car-driver.jpg"
        alt="truck driver image"
      />
      <Timeline>7 mins away</Timeline>
    </CardContainer>
  );
};

export default TruckCard;
