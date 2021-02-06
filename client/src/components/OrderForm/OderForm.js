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
} from "@material-ui/core";

import {
  Form,
  FormAvatar,
  FormPaper,
  SubmitButton,
} from "./OrderForm.elements";
import { FaHelicopter } from "react-icons/fa";
import MapSearchInput from "../Map/mapinput";

const OderForm = () => {
  const [service, setService] = useState("");

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  return (
    <div>
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
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={service}
                    onChange={handleServiceChange}
                    label="Age"
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
              <Grid item xs={12}>
                <MapSearchInput />
              </Grid>
              <Grid item xs={12}>
                <MapSearchInput />
              </Grid>
            </Grid>
            <SubmitButton type="submit" secondary>
              Order Truck
            </SubmitButton>
          </Form>
        </FormPaper>
      </Container>
    </div>
  );
};

export default OderForm;
