import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { ServiceCard, Navbar } from "../../components";
import { services } from "../../Resources/Data/services";

const Services = ({ withNav }) => {
  const ServiceContainer = () => (
    <div
      style={{
        maxWidth: "960px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container direction="row" justify="center" alignContent="center">
        {services.map((data) => (
          <ServiceCard key={data.heading} {...data} />
        ))}
      </Grid>
    </div>
  );

  return (
    <div
      style={{
        backgroundColor: "#f4f1de",
        minHeight: "100vh",
      }}
    >
      {withNav ? (
        <Fragment>
          <Navbar />
          <ServiceContainer />
        </Fragment>
      ) : (
        <ServiceContainer />
      )}
    </div>
  );
};

export default Services;
