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

export const ArticleListComponent: SFC<{ listOfArticle: Array<Article> }> = ({
  listOfArticle
}) => {
  return (
    <Fragment>
      <Card.Group>
        {listOfArticle.map((article, i) => (
          <Fragment>
            <Card
              image={article.image}
              header={article.firstName + " " + article.lastName}
              meta={article.relation}
              description={article.description}
              extra={extra}
            />
          </Fragment>
        ))}
      </Card.Group>
    </Fragment>
  );
};
