import React, { SFC } from "react";
import {
  Header as SemanticHeader,
  Button,
  Sticky,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export const Header: SFC<{ isLoggedIn: boolean; name: string }> = ({
  isLoggedIn,
  name
}) => {
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
        {isLoggedIn ? (
          <div style={{ float: "right" }}>Logged in as {name}</div>
        ) : (
          <Button.Group floated="right">
            <Link to={`/login`}>
              <Button color="green">Login</Button>
            </Link>
            <Button.Or />
            <Link to={`/signup`}>
              <Button basic color="green">
                SignUp
              </Button>
            </Link>
          </Button.Group>
        )}
      </Segment>
    </Sticky>
  );
};
