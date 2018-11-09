import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { Header } from "../../base/components/Header";

export class SignupContainer extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Fragment>
    );
  }
}
