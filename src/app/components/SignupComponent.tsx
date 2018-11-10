import React, { SFC, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
        <Grid item xs={12}>
          <Grid container justify="center" spacing={8}>
            <TextField
              id="name"
              label="Name"
              value={name}
              onChange={event => setUserName(event.target.value)}
              margin="normal"
              variant="standard"
            />
          </Grid>
          <Grid container justify="center" spacing={8}>
            <TextField
              id="email"
              label="Email"
              value={email}
              onChange={event => setUserEmail(event.target.value)}
              margin="normal"
              variant="standard"
            />
          </Grid>
          <Grid container justify="center" spacing={8}>
            <TextField
              id="phone"
              label="Phone"
              value={phone}
              onChange={event => setUserPhone(event.target.value)}
              margin="normal"
              variant="standard"
            />
          </Grid>
          <Grid container justify="center" spacing={8}>
            <TextField
              id="aadharId"
              label="AadharId"
              value={aadharId}
              onChange={event => setUserAadharId(event.target.value)}
              margin="normal"
              variant="standard"
            />
          </Grid>
          <Grid container justify="center" spacing={8}>
            <Button size="large" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
