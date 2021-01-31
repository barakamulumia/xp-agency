import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { ServiceCard, Navbar } from "../../components";
import { services } from "../../Resources/Data/services";

export default function Services({ withNav }) {
  const ServiceContainer = () => (
    <div
      style={{
        maxWidth: "960px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
        spacing={5}
      >
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
}