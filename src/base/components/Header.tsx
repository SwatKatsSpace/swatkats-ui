import React, { Component, Fragment } from "react";
import { Header as SemanticHeader, Button, Sticky } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <Fragment>
        <Sticky>
          <SemanticHeader
            as="h1"
            color="brown"
            floated="left"
            content="SwatKats"
            subheader="under construction"
            icon="braille"
          />
          <Button.Group floated="right">
            <Button color="green" content="Green">
              Login
            </Button>
            <Button.Or />
            <Link to={`/signup`}>
              <Button color="brown" content="Brown">
                SignUp
              </Button>
            </Link>
          </Button.Group>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Sticky>
      </Fragment>
    );
  }
}
