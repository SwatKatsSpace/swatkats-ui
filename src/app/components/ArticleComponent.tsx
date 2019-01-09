import React, { SFC, Fragment } from "react";
import { Segment, Item, Label, Button, Icon, List } from "semantic-ui-react";
// import { Link } from "react-router-dom";

export const ArticleComponent: SFC<{ selectedArticle: Article }> = ({
  selectedArticle
}) => {
  return (
    <Fragment>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image src={selectedArticle.image} size="big" />
            <Item.Content>
              <Item.Header as="a">
                {selectedArticle.firstName + " " + selectedArticle.lastName}
              </Item.Header>
              <Item.Meta>
                <Icon color="green" name="check" /> Verified
              </Item.Meta>
              <Item.Description>{selectedArticle.description}</Item.Description>
              <Item.Extra>
                <Label>{selectedArticle.relation}</Label>
                <br />
                <br />
                <List divided vertical size="medium" relaxed="very">
                  <List.Item>
                    <List.Icon name="mail" />
                    <List.Content>
                      <List.Header>{selectedArticle.email}</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="phone" />
                    <List.Content>
                      <List.Header>{selectedArticle.phone}</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="address card outline" />
                    <List.Content>
                      <List.Header>{selectedArticle.aadharId}</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="money bill alternate outline" />
                    <List.Content>
                      <List.Header>{selectedArticle.panId}</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
                <br />
                <br />
                <Button floated="right" color="brown">
                  I want to donate <Icon name="chevron right" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Fragment>
  );
};
