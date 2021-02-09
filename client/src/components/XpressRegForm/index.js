import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import AuthService from "../../services/auth.service";

import {
  MdDirectionsCar,
  MdPlace,
  MdCallToAction,
  MdStreetview,
} from "react-icons/md";
import { useForm } from "react-hook-form";

import {
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  InputAdornment,
} from "@material-ui/core";

import {
  Form,
  SubmitButton,
  FormPaper,
  FormAvatar,
  FormContainer,
} from "../Account/Account.elements";

export default function XpressRegister() {
  const { register, handleSubmit } = useForm({
    reValidateMode: "onChange",
    mode: "onBlur",
  });
  // const history = useHistory();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  const onSubmit = (user) => {
    const { truckno, dlno, address } = user;
    setLoading(true);

    console.log(truckno, dlno, address);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormPaper elevation={6}>
        <FormAvatar>
          <MdStreetview />
        </FormAvatar>
        <Typography component="h1" variant="h5">
          Complete registration
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdDirectionsCar />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                required
                fullWidth
                id="truckno"
                label="Truck No"
                name="truckno"
                autoComplete="truckno"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdCallToAction />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                required
                fullWidth
                id="dlno"
                label="Driving Licence"
                name="dlno"
                autoComplete="dlno"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdPlace />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
              />
            </Grid>
          </Grid>
          <br />
          <SubmitButton type="submit" secondary disabled={loading}>
            Finish
          </SubmitButton>
          <br />
          <p>{message ? message : ""}</p>
          <br />
        </Form>
      </FormPaper>
    </Container>
  );
}
