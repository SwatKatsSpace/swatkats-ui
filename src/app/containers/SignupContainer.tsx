import React, { Fragment } from "react";
import { Header } from "../../base/components/Header";
import { SignupComponent } from "../components/SignupComponent";

export class SignupContainer extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <SignupComponent />
      </Fragment>
    );
  }
}
