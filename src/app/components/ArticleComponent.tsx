import React, { SFC, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export const ArticleComponent: SFC<{}> = () => {
  return (
    <Fragment>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <TextField
            id="name"
            label="Name"
            value={""}
            onChange={event => console.log(event.target.value)}
            margin="normal"
            fullWidth={true}
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="email"
            label="Email"
            value={""}
            onChange={event => console.log(event.target.value)}
            margin="normal"
            fullWidth={true}
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="phone"
            label="Phone"
            value={""}
            onChange={event => console.log(event.target.value)}
            margin="normal"
            fullWidth={true}
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="aadharId"
            label="AadharId"
            value={""}
            onChange={event => console.log(event.target.value)}
            margin="normal"
            fullWidth={true}
            variant="standard"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
