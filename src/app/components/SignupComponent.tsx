import React, { SFC, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export const SignupComponent: SFC<{
  name: string;
  email: string;
  phone: string;
  aadharId: string;
  setUserName: (name: string) => void;
  setUserEmail: (email: string) => void;
  setUserPhone: (phone: string) => void;
  setUserAadharId: (aadharId: string) => void;
}> = ({
  name,
  email,
  phone,
  aadharId,
  setUserName,
  setUserEmail,
  setUserPhone,
  setUserAadharId
}) => {
  return (
    <Fragment>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={event => setUserName(event.target.value)}
            margin="normal"
            fullWidth={true}
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={event => setUserEmail(event.target.value)}
            margin="normal"
            fullWidth={true}
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="phone"
            label="Phone"
            value={phone}
            onChange={event => setUserPhone(event.target.value)}
            margin="normal"
            fullWidth={true}
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="aadharId"
            label="AadharId"
            value={aadharId}
            onChange={event => setUserAadharId(event.target.value)}
            margin="normal"
            fullWidth={true}
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} justify="center">
          <Link to={`/list`}>
            <Button variant="contained" size="large" color="default">
              Submit
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};
