import React, { useState } from "react";

import {
  Select,
  InputLabel,
  FormControl,
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
} from "./OrderForm.elements";
import { FaHelicopter } from "react-icons/fa";
// import MapSearchInput from "../Map/mapinput";

const OderForm = () => {
  const [service, setService] = useState("");
  const [numOfBedRooms, setNumOfBedrooms] = useState("");
  const [approxFeet, setApproxFeet] = useState("");

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleNumOfBedroomsChange = (event) => {
    setNumOfBedrooms(event.target.value);
  };

  const handleAproxFeetChange = (event) => {
    setApproxFeet(event.target.value);
  };

  const isHouseMoving = () => service === "hm";
  const isOfficeMoving = () => service === "om";

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
              <FormControl
                variant="outlined"
                style={{
                  width: "100%",
                }}
              >
                <InputLabel id="service-select-outlined-label">
                  Service
                </InputLabel>
                <Select
                  labelId="service-select-outlined-label"
                  id="service-select-outlined"
                  value={service}
                  onChange={handleServiceChange}
                  label="Service"
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value="fr">Freight</MenuItem>
                  <MenuItem value="hm">House Moving</MenuItem>
                  <MenuItem value="om">Office Moving</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {isHouseMoving() && (
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  style={{
                    width: "100%",
                  }}
                >
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
                </FormControl>
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
