import React, { SFC, Fragment } from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const extra = (
  <Fragment>
    <a>
      <Icon name="thumbs up outline" float="left" />
      {16} Likes
    </a>
    <Link to={`/article`}>
      <Button icon labelPosition="right" floated="right">
        Know more
        <Icon name="arrow right" />
      </Button>
    </Link>
  </Fragment>
);

export const ArticleListComponent: SFC<{}> = () => {
  return (
    <Fragment>
      <Card.Group>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e, i) => (
          <Fragment>
            <Card
              image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              header="Patrick Dumbeldor"
              meta="Friend"
              description="Dumbeldor is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
              extra={extra}
            />
          </Fragment>
        ))}
      </Card.Group>
    </Fragment>
  );
};
