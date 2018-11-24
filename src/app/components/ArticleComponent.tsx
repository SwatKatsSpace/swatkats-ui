import React, { SFC, Fragment } from "react";
import { Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const ArticleComponent: SFC<{}> = () => {
  return (
    <Fragment>
      <Form>
        <Form.Group unstackable widths={2}>
          <Form.Input
            id="name"
            label="Name"
            value={""}
            onChange={event => console.log(event.target.value)}
          />
          <Form.Input
            id="email"
            label="Email"
            value={""}
            onChange={event => console.log(event.target.value)}
          />
        </Form.Group>
        <Form.Group unstackable widths={2}>
          <Form.Input
            id="phone"
            label="Phone"
            value={""}
            onChange={event => console.log(event.target.value)}
          />
          <Form.Input
            id="aadharId"
            label="AadharId"
            value={""}
            onChange={event => console.log(event.target.value)}
          />
        </Form.Group>
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Link to={`/list`}>
          <Button type="submit">Submit</Button>
        </Link>
      </Form>
    </Fragment>
  );
};
