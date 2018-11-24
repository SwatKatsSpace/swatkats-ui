import React, { SFC, Fragment } from "react";
import { Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const SignupComponent: SFC<{
  name: string;
  email: string;
  phone: string;
  aadharId: string;
  setUserName: (name: string) => void;
  setUserEmail: (email: string) => void;
  setUserPhone: (phone: string) => void;
  setUserAadharId: (aadharId: string) => void;
}> = ({
  name,
  email,
  phone,
  aadharId,
  setUserName,
  setUserEmail,
  setUserPhone,
  setUserAadharId
}) => {
  return (
    <Fragment>
      <Form>
        <Form.Group unstackable widths={2}>
          <Form.Input
            id="name"
            label="Name"
            value={name}
            onChange={event => setUserName(event.target.value)}
          />
          <Form.Input
            id="email"
            label="Email"
            value={email}
            onChange={event => setUserEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group unstackable widths={2}>
          <Form.Input
            id="phone"
            label="Phone"
            value={phone}
            onChange={event => setUserPhone(event.target.value)}
          />
          <Form.Input
            id="aadharId"
            label="AadharId"
            value={aadharId}
            onChange={event => setUserAadharId(event.target.value)}
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
