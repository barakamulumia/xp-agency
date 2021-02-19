import { Typography } from "@material-ui/core";
import React from "react";
import { Footer, Navbar } from "../../components";
import { ImageBgContainer } from "../../resources/styles/global";

const Discover = ({ withNav }) => {
  return (
    <div>
      <Navbar />
      <ImageBgContainer>
        <Typography variant="h1" component="h1">
          Comming Soon.........
        </Typography>
      </ImageBgContainer>
      <Footer />
    </div>
  );
};

export default Discover;
