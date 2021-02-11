import React, { useState } from "react";
import OrderService from "../../services/order.service";

import {
  Select,
  InputLabel,
  MenuItem,
  Container,
  CssBaseline,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";

import {
  Form,
  FormAvatar,
  FormPaper,
  SubmitButton,
  FormControlWrapper,
  FormContainer,
} from "./OrderForm.elements";
import { FaHelicopter } from "react-icons/fa";
import MapSearchInput from "../Map/mapinput";

const OderForm = () => {
  const [moveType, setMoveType] = useState("fr");
  const [numOfBedRooms, setNumOfBedrooms] = useState("");
  const [approxFeet, setApproxFeet] = useState("");
  const [destination, setDestination] = useState({
    address: "",
    latlng: "",
    placeId: "",
  });
  const [pickup, setPickUp] = useState({
    address: "",
    latlng: "",
    placeId: "",
  });

  const handleMoveTypeChange = (event) => {
    setMoveType(event.target.value);
  };

  const handleNumOfBedroomsChange = (event) => {
    setNumOfBedrooms(event.target.value);
  };

  const handleAproxFeetChange = (event) => {
    setApproxFeet(event.target.value);
  };

  const handleDestinationChange = (v) => {
    setDestination(v);
  };
  const handlePickUpChange = (v) => {
    setPickUp(v);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const orderObj = {
      moveType,
      clientId: "601667e4d14c2715888e4623",
      driverId: "601fc95aa69bba33f4e2ad58",
      load:
        moveType === "hm"
          ? `${numOfBedRooms} Bed rooms`
          : moveType === "om"
          ? `${approxFeet} Ft`
          : "Designated",
      pickup,
      destination,
      charges: 4000,
    };

    OrderService.makeOrder(orderObj).then(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  };
  const isHouseMoving = () => moveType === "hm";
  const isOfficeMoving = () => moveType === "om";

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormPaper elevation={6}>
        <FormAvatar>
          <FaHelicopter />
        </FormAvatar>
        <Typography component="h1" variant="h5">
          Xpress Shipping
        </Typography>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlWrapper variant="outlined">
                <InputLabel id="service-select-outlined-label">
                  What are you moving
                </InputLabel>
                <Select
                  labelId="service-select-outlined-label"
                  id="service-select-outlined"
                  value={moveType}
                  onChange={handleMoveTypeChange}
                  label="Service"
                >
                  <MenuItem value="fr">Freight</MenuItem>
                  <MenuItem value="hm">House Moving</MenuItem>
                  <MenuItem value="om">Office Moving</MenuItem>
                </Select>
              </FormControlWrapper>
            </Grid>
            {isHouseMoving() && (
              <Grid item xs={12}>
                <FormControlWrapper variant="outlined">
                  <InputLabel id="bdrms-select-outlined-label">
                    Number of Bedrooms
                  </InputLabel>
                  <Select
                    labelId="bdrms-select-outlined-label"
                    id="bdrms-select-outlined"
                    value={numOfBedRooms}
                    onChange={handleNumOfBedroomsChange}
                    label="Number of Bedrooms"
                  >
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    <MenuItem value={1}>1 Bed Room</MenuItem>
                    <MenuItem value={2}>2 Bed Rooms</MenuItem>
                    <MenuItem value={3}>3 Bed Rooms</MenuItem>
                    <MenuItem value={4}>4 Bed Rooms</MenuItem>
                    <MenuItem value={5}>5 Bed Rooms</MenuItem>
                  </Select>
                </FormControlWrapper>
              </Grid>
            )}
            {isOfficeMoving() && (
              <Grid item xs={12}>
                <TextField
                  style={{
                    width: "100%",
                  }}
                  variant="outlined"
                  type="text"
                  id="approxFeet"
                  label="Aproximate Feet"
                  name="approxFeet"
                  onChange={handleAproxFeetChange}
                  value={approxFeet}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <FormContainer>
                <p>Pick Up Location</p>
                <MapSearchInput SET_LOCATION={handlePickUpChange} />
              </FormContainer>
            </Grid>
            <Grid item xs={12}>
              <FormContainer>
                <p>Destination Of Your Goods</p>
                <MapSearchInput SET_LOCATION={handleDestinationChange} />
              </FormContainer>
            </Grid>
          </Grid>
          <SubmitButton type="submit" secondary>
            Order Truck
          </SubmitButton>
        </Form>
      </FormPaper>
    </Container>
  );
};

export default OderForm;
