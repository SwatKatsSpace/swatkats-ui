import React, { SFC, Fragment } from "react";
import { Card, Icon, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const ArticleListComponent: SFC<{ listOfArticle: Array<Article> }> = ({
  listOfArticle
}) => {
  return (
    <Fragment>
      <Card.Group>
        {listOfArticle.map((article, i) => (
          <Card key={article.uuid}>
            <Image src={article.image} size="large" />
            <Card.Content>
              <Card.Header>
                {article.firstName + " " + article.lastName}
              </Card.Header>
              <Card.Meta>
                <span className="date">{article.relation}</span>
              </Card.Meta>
              <Card.Description>{article.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="thumbs up outline" float="left" />
                {article.likes} Likes
              </a>
              <Link to={`/article/${article.uuid}`}>
                <Button icon labelPosition="right" floated="right">
                  Know more
                  <Icon name="arrow right" />
                </Button>
              </Link>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Fragment>
  );
};
