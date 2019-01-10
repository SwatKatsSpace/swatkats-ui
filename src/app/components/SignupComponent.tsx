import React, { SFC, Fragment } from "react";
import { Form, Button, Segment, Grid } from "semantic-ui-react";
// import { Link } from "react-router-dom";

export const SignupComponent: SFC<{
  name: string;
  email: string;
  phone: string;
  aadharId: string;
  panId: string;
  password: string;
  setUserName: (name: string) => void;
  setUserEmail: (email: string) => void;
  setUserPhone: (phone: string) => void;
  setUserAadharId: (aadharId: string) => void;
  setUserPanId: (panId: string) => void;
  setUserPassword1: (password1: string) => void;
  setUserPassword2: (password2: string) => void;

  createUser: () => void;
}> = ({
  name,
  email,
  phone,
  aadharId,
  panId,
  password,
  setUserName,
  setUserEmail,
  setUserPhone,
  setUserAadharId,
  setUserPanId,
  setUserPassword1,
  setUserPassword2,
  createUser
}) => {
  return (
    <Fragment>
      <Grid columns={16}>
        <Grid.Column width={4} />
        <Grid.Column width={8}>
          <Segment centered={true}>
            <Form>
              <Form.Input
                id="name"
                label="Name"
                value={name}
                onChange={event => setUserName(event.target.value)}
                width={16}
              />
              <Form.Input
                id="email"
                label="Email"
                value={email}
                onChange={event => setUserEmail(event.target.value)}
                width={16}
              />
              <Form.Input
                id="phone"
                label="Phone"
                value={phone}
                onChange={event => setUserPhone(event.target.value)}
                width={16}
              />
              <Form.Input
                id="aadharId"
                label="AadharId"
                value={aadharId}
                onChange={event => setUserAadharId(event.target.value)}
                width={16}
              />
              <Form.Input
                id="panId"
                label="PanId"
                value={panId}
                onChange={event => setUserPanId(event.target.value)}
                width={16}
              />
              <Form.Input
                id="password1"
                label="Password"
                value={password}
                onChange={event => setUserPassword1(event.target.value)}
                width={16}
              />
              <Form.Input
                id="password2"
                label="Re-enter Password"
                onChange={event => setUserPassword2(event.target.value)}
                width={16}
              />
              <Form.Checkbox label="I agree to the Terms and Conditions" />
              {/* <Link to={`/list`}> */}
              <Button type="submit" onClick={() => createUser()}>
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
