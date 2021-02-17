import React, { Fragment } from "react";
import { Footer, InfoSection, Navbar } from "../../components";
import { HeroInfo } from "../../resources/Data/heroInfo";
import { Services } from "../index";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <InfoSection {...HeroInfo} />
      <Services />
      <Footer />
    </Fragment>
  );
}
