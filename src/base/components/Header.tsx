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
          <Link to={`/signup`}>
            <Button floated="right">SignUp</Button>
          </Link>
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
