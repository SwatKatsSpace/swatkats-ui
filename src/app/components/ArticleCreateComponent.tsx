import React, { SFC, Fragment } from "react";
import { Form, Button, Segment, Grid } from "semantic-ui-react";
// import { Link } from "react-router-dom";

export const ArticleCreateComponent: SFC<{
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  aadharId: string;
  panId: string;
  image: string;
  relation: string;
  description: string;
  likes: string;
  setArticleFirstName: (firstName: string) => void;
  setArticleLastName: (lastName: string) => void;
  setArticleEmail: (email: string) => void;
  setArticlePhone: (phone: string) => void;
  setArticleAadharId: (aadharId: string) => void;
  setArticlePanId: (panId: string) => void;
  setArticleImage: (image: string) => void;
  setArticleRelation: (relation: string) => void;
  setArticleDescription: (description: string) => void;
  setArticleLikes: (likes: string) => void;
  createArticle: () => void;
}> = ({
  firstName,
  lastName,
  email,
  phone,
  aadharId,
  panId,
  image,
  relation,
  description,
  likes,
  setArticleFirstName,
  setArticleLastName,
  setArticleEmail,
  setArticlePhone,
  setArticleAadharId,
  setArticlePanId,
  setArticleImage,
  setArticleRelation,
  setArticleDescription,
  setArticleLikes,
  createArticle
}) => {
  return (
    <Fragment>
      <Grid columns={16}>
        <Grid.Column width={4} />
        <Grid.Column width={8}>
          <Segment centered>
            <Form>
              <Form.Input
                id="firstName"
                label="FirstName"
                value={firstName}
                onChange={event => setArticleFirstName(event.target.value)}
                width={16}
              />
              <Form.Input
                id="lastName"
                label="LastName"
                value={lastName}
                onChange={event => setArticleLastName(event.target.value)}
                width={16}
              />
              <Form.Input
                id="email"
                label="Email"
                value={email}
                onChange={event => setArticleEmail(event.target.value)}
                width={16}
              />
              <Form.Input
                id="phone"
                label="Phone"
                value={phone}
                onChange={event => setArticlePhone(event.target.value)}
                width={16}
              />
              <Form.Input
                id="aadharId"
                label="AadharId"
                value={aadharId}
                onChange={event => setArticleAadharId(event.target.value)}
                width={16}
              />
              <Form.Input
                id="panId"
                label="PanId"
                value={panId}
                onChange={event => setArticlePanId(event.target.value)}
                width={16}
              />
              <Form.Input
                id="image"
                label="Image"
                value={image}
                onChange={event => setArticleImage(event.target.value)}
                width={16}
              />
              <Form.Input
                id="relation"
                label="Relation"
                value={relation}
                onChange={event => setArticleRelation(event.target.value)}
                width={16}
              />
              <Form.Input
                id="description"
                label="Description"
                value={description}
                onChange={event => setArticleDescription(event.target.value)}
                width={16}
              />
              <Form.Input
                id="likes"
                label="Likes"
                value={likes}
                onChange={event => setArticleLikes(event.target.value)}
                width={16}
              />
              <Form.Checkbox label="I agree to the Terms and Conditions" />
              {/* <Link to={`/list`}> */}
              <Button type="submit" onClick={() => createArticle()}>
                Submit
              </Button>
              {/* </Link> */}
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4} />
      </Grid>
    </Fragment>
  );
};
