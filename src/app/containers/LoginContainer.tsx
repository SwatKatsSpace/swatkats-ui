import React, { Fragment, Component, Props } from "react";
import {Header} from "../../base/components/Header";
import {LoginComponent} from "../components/LoginComponent";
import { SwatkatsActionType } from '../actions/types';
import {Action, Dispatch, bindActionCreators} from "redux"

import {
    setLoginEmail,
    setLoginPhone,
    setLoginPassword,
    doLogin
} from "../actions/login";

import connect from  "react-redux";

interface StateProps {
    email : string;
    phone : string;
    password : string;
}

interface DispatchProps {
    setLoginEmail: (email: string) => void;
    setLoginPhone: (phone : string) => void;
    setLoginPassword: (password: string) => void;
    doLogin: () => void;
}

class login extends Component<Props> {
    render() {
        const {
            email,
            phone,
            password
        } = this.props;

        return (
            <Fragment>
                <Header>
                    <LoginComponent
                    email={email}
                    phone={phone}
                    password={password}
                    doLogin={doLogin}
                    setLoginEmail={setLoginEmail}
                    setLoginPhone={setLoginPhone}
                    setLoginPassword={setLoginPassword}
                    >
                    </LoginComponent>
                </Header>
            </Fragment>
        );
    }
}

const mapStateToProps = (state : AppState): StateProps => {
    const {email, phone, password} = state.user.user;
    return {
        email,
        phone,
        password
    };
}

const mapDispatchToProps = (
    dispatch: Dispatch<Action<SwatkatsActionType>>
): DispatchProps => bindActionCreators({
    setLoginEmail,
    setLoginPhone,
    setLoginPassword
},
    dispatch
);

export const loginContainer = connect<StateProps, DispatchProps, {}, {}>(
    mapStateToProps,
    mapDispatchToProps
  )(login);
  
