import React, { Fragment } from "react";
import { Container } from "../../Resources/Styles/global";
import { DecisionDialog } from "../";

import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  Img,
  ImgWrapper,
} from "./InfoSection.elements";

const InfoSection = ({ topline, headline, description, btn, img }) => {
  return (
    <Fragment>
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topline.content}</TopLine>
                <Heading>{headline.content}</Heading>
                <SubTitle>{description.content}</SubTitle>
                <DecisionDialog
                  big="true"
                  primary="true"
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
