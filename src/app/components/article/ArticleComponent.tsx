import React, { SFC, Fragment } from "react";
import { Segment, Item, Label, Button, Icon, List } from "semantic-ui-react";
import { PaymentComponent } from "./PaymentComponent";

export const ArticleComponent: SFC<{
  selectedArticle: Article;
  isPaymentModalOpen: boolean;
  paymentValue: number;
  paymentError: string;
  setIsPaymentModalOpen: () => void;
  setPaymentValue: (value: number) => void;
  setPaymentError: (error: string) => void;
}> = ({
  selectedArticle,
  isPaymentModalOpen,
  setIsPaymentModalOpen,
  paymentValue,
  paymentError,
  setPaymentValue,
  setPaymentError
}) => {
  return (
    <Fragment>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image src={selectedArticle.image} size="big" />
            <Item.Content>
              <Item.Header>
                {`${selectedArticle.firstName} ${selectedArticle.lastName}`}
              </Item.Header>
              <Item.Meta>
                <Icon color="green" name="check" /> Verified
              </Item.Meta>
              <Item.Description>{selectedArticle.description}</Item.Description>
              <Item.Extra>
                <Label>{selectedArticle.relation}</Label>
                <br />
                <br />
                <List divided size="medium" relaxed="very">
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
                <Button
                  floated="right"
                  color="brown"
                  onClick={() => setIsPaymentModalOpen()}
                >
                  I want to donate <Icon name="chevron right" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <PaymentComponent
        isPaymentModalOpen={isPaymentModalOpen}
        setIsPaymentModalOpen={setIsPaymentModalOpen}
        paymentValue={paymentValue}
        paymentError={paymentError}
        setPaymentValue={setPaymentValue}
        setPaymentError={setPaymentError}
      />
    </Fragment>
  );
};
