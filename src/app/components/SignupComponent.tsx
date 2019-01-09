import React, { SFC, Fragment } from "react";
import { Form, Button, Segment, Grid } from "semantic-ui-react";
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
  save: () => void;
}> = ({
  name,
  email,
  phone,
  aadharId,
  setUserName,
  setUserEmail,
  setUserPhone,
  setUserAadharId,
  save
}) => {
  return (
    <Fragment>
      <Grid columns={16}>
        <Grid.Column width={4} />
        <Grid.Column width={8}>
          <Segment centered={true}>
            <Form>
              <Form.Group>
                <Form.Input
                  id="name"
                  label="Name"
                  value={name}
                  onChange={event => setUserName(event.target.value)}
                  width={16}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  id="email"
                  label="Email"
                  value={email}
                  onChange={event => setUserEmail(event.target.value)}
                  width={16}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  id="phone"
                  label="Phone"
                  value={phone}
                  onChange={event => setUserPhone(event.target.value)}
                  width={16}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  id="aadharId"
                  label="AadharId"
                  value={aadharId}
                  onChange={event => setUserAadharId(event.target.value)}
                  width={16}
                />
              </Form.Group>
              <Form.Checkbox label="I agree to the Terms and Conditions" />
              <Link to={`/list`}>
                <Button type="submit" onClick={() => save}>
                  Submit
                </Button>
              </Link>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4} />
      </Grid>
    </Fragment>
  );
};
