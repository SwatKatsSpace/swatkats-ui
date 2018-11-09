import React, { SFC, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export const SignupComponent: SFC = () => {
  return (
    <Fragment>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={8}>
            <TextField
              id="outlined-name"
              label="Name"
              // className={classes.textField}
              value={"hello"}
              onChange={() => console.log("hello111")}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid container justify="center" spacing={8}>
            <TextField
              id="outlined-name"
              label="Email"
              // className={classes.textField}
              value={"hello"}
              onChange={() => console.log("hello111")}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid container justify="center" spacing={8}>
            <TextField
              id="outlined-name"
              label="Phone"
              // className={classes.textField}
              value={"hello"}
              onChange={() => console.log("hello111")}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid container justify="center" spacing={8}>
            <TextField
              id="outlined-name"
              label="AadharId"
              // className={classes.textField}
              value={"hello"}
              onChange={() => console.log("hello111")}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
