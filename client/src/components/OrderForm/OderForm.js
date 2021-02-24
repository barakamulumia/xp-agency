import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { addNewOrder, ordersFilterChanged } from "../../state/orders.slice";
import { selectDestination, selectPickUp } from "../../state/maps.slice";
import { AuthAPI } from "../../api";

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
  Label,
} from "./OrderForm.elements";

import { FaHelicopter } from "react-icons/fa";
import MapSearchInput from "../Map/mapinput";
import calcPriceFromLatLng from "../../resources/utils/price";

const OderForm = () => {
  const dispatch = useDispatch();
  const client = AuthAPI.getCurrentUser();

  const [moveType, setMoveType] = useState("fr");
  const [numOfBedRooms, setNumOfBedrooms] = useState("");
  const [approxFeet, setApproxFeet] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const history = useHistory();

  const handleMoveTypeChange = (event) => {
    setMoveType(event.target.value);
  };

  const handleNumOfBedroomsChange = (event) => {
    setNumOfBedrooms(event.target.value);
  };

  const handleAproxFeetChange = (event) => {
    setApproxFeet(event.target.value);
  };

  const isHouseMoving = () => moveType === "hm";
  const isOfficeMoving = () => moveType === "om";

  const pickup = useSelector(selectPickUp);
  const destination = useSelector(selectDestination);

  const canSave =
    [pickup, destination, moveType].every(Boolean) &&
    addRequestStatus === "idle";

  const handleSubmit = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        const orderObj = {
          moveType,
          clientId: client.id,
          driverId: "601fc95aa69bba33f4e2ad58",
          load:
            moveType === "hm"
              ? `${numOfBedRooms} Bed rooms`
              : moveType === "om"
              ? `${approxFeet} Ft`
              : "Designated",
          pickup,
          destination,
          charges: calcPriceFromLatLng(pickup, destination),
        };
        const resultAction = await dispatch(addNewOrder(orderObj));
        unwrapResult(resultAction);
        dispatch(ordersFilterChanged("pending"));
        history.push("/client#orders");
      } catch (err) {
        console.error("Failed to save the order: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  if (!client) {
    return null;
  }

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
        <Form>
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
                <Label>Pick Up Location</Label>
                <MapSearchInput inputType="pickup" />
              </FormContainer>
            </Grid>
            <Grid item xs={12}>
              <FormContainer>
                <Label>Destination Of Your Goods</Label>
                <MapSearchInput inputType="destination" />
              </FormContainer>
            </Grid>
          </Grid>
          <SubmitButton
            type="button"
            onClick={handleSubmit}
            primary={canSave}
            disabled={!canSave}
          >
            Order Truck
          </SubmitButton>
        </Form>
      </FormPaper>
    </Container>
  );
};

export default OderForm;
