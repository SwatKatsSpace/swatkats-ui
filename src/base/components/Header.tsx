import React, { Component } from "react";
import {
  Header as SemanticHeader,
  Button,
  Sticky,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <Sticky>
        <Segment>
          <Link to={`/list`}>
            <SemanticHeader
              as="h1"
              color="brown"
              floated="left"
              content="SwatKats"
              subheader="under construction"
              icon="braille"
            />
          </Link>
          <Link to={`/createarticle`}>
            <Button size="big" color="brown">
              Create new article
            </Button>
          </Link>
          <Button.Group floated="right">
            <Button color="green">Login</Button>
            <Button.Or />
            <Link to={`/signup`}>
              <Button basic color="green">
                SignUp
              </Button>
            </Link>
          </Button.Group>
        </Segment>
      </Sticky>
    );
  }
}
