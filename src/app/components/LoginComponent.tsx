import React, { SFC } from "react";
import { Form, Button, Segment, Grid } from "semantic-ui-react";

export const LoginComponent: SFC<{
  email: string;
  phone: string;
  password: string;

  setLoginEmail: (email: string) => void;
  setLoginPhone: (phone: string) => void;
  setLoginPassword: (password: string) => void;

  login: () => void;
}> = ({ email, password, setLoginEmail, setLoginPassword, login }) => {
  return (
    <Grid columns={16}>
      <Grid.Column width={4} />
      <Grid.Column width={8}>
        <Segment>
          <Form>
            <Form.Input
              id="email"
              label="Email or Phone"
              value={email}
              onChange={event => setLoginEmail(event.target.value)}
              width={16}
            />
            <Form.Input
              id="password"
              label="Password"
              value={password}
              onChange={event => setLoginPassword(event.target.value)}
              type="password"
              width={16}
            />
            <Button type="submit" onClick={() => login()}>
              submit
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
      <Grid.Column width={4} />
    </Grid>
  );
};
