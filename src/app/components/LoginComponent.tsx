import React, { SFC, Fragment } from "react";
import {Form, Button, Segment, Grid} from "semantic-ui-react";

export const LoginComponent: SFC<{
    email: string;
    phone: string;
    password: string;

    setLoginEmail: (email:string) => void;
    setLoginPhone: (phone:string) => void;
    setLoginPassword: (password:string) => void;

    doLogin:() => void;
}> = ({
    email,
    phone,
    password,
    setLoginEmail,
    setLoginPhone,
    setLoginPassword,
    doLogin
}) => {
    return (
        <Fragment>
            <Grid columns={16}>
                <Grid.Column width={4}>
                    <Grid.Column width={8}>
                        <Segment centered>
                            <Form>
                                <Form.Input 
                                    id="email" 
                                    label="email" 
                                    value={email}
                                    onChange={event=> setLoginEmail(event.target.value)}
                                    width={16}
                                />
                                <Form.Input
                                    id="phone"
                                    label="phone"
                                    value={phone}
                                    onChange={event => setLoginPhone(event.target.value)}
                                    width={16}
                                />
                                <Form.Input
                                    id="password"
                                    label="password"
                                    value={password}
                                    onChange={event => setLoginPassword(event.target.value)}
                                    width={16}
                                />
                                <Button type="submit" onClick={()=>doLogin()}>submit</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Column>
            </Grid>
        </Fragment>
    );
};