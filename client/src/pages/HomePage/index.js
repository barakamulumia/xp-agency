import React, { Fragment } from "react";
import { Footer, InfoSection, Navbar } from "../../components";
import { HeroInfo } from "../../Resources/Data/heroInfo";
import { Services } from "../index";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <InfoSection {...HeroInfo} />
      <Services />
      <Footer />
    </Fragment>
  );
};

export default Home;
