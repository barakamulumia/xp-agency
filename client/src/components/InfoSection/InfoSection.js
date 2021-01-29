import React, { Fragment } from "react";
import { Container } from "../../Resources/Styles/global";
import { DecisionDialog } from "../";

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  Img,
  ImgWrapper,
} from "./InfoSection.elements";

const InfoSection = ({
  imgStart,
  topline,
  headline,
  description,
  btn,
  img,
}) => {
  return (
    <Fragment>
      <InfoSec>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topline.content}</TopLine>
                <Heading>{headline.content}</Heading>
                <SubTitle>{description.content}</SubTitle>
                <DecisionDialog
                  big="true"
                  secondary="true"
                  btnText={btn.label}
                  actionText="Sign up"
                />
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={img.start}>
                <Img src={img.src} alt={img.alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </Fragment>
  );
};

export default InfoSection;
