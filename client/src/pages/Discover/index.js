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
      </Fragment>
    </div>
  );
};

export default Discover;
