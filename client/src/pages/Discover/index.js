import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { Navbar } from "../../components";

const Discover = ({ withNav }) => {
  return (
    <div
      style={{
        backgroundColor: "#f4f1de",
        minHeight: "100vh",
      }}
    >
      <Fragment>
        <Navbar />
        <br />
        <Typography variant="h1" component="h1">
          Comming Soon.........
        </Typography>
      </Fragment>
    </div>
  );
};

export default Discover;
