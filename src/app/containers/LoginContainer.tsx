import React, { Fragment, Component } from "react";
import { Header } from "../../base/components/Header";
import { LoginComponent } from "../components/LoginComponent";
import { SwatkatsActionType } from '../actions/types';
import { Action, Dispatch, bindActionCreators } from "redux"

import {
    setUserEmail,
    setUserPhone,
    setUserPassword1,
    login
} from "../actions/user";

import { connect } from "react-redux";

interface StateProps {
    email: string;
    phone: string;
    password: string;
}

interface DispatchProps {
    setUserEmail: (email: string) => void;
    setUserPhone: (phone: string) => void;
    setUserPassword1: (password: string) => void;
    login: () => void;
}
class Login extends Component<StateProps & DispatchProps> {
    
    render() {
        const {
            email,
            phone,
            password,
            setUserEmail,
            setUserPhone,
            setUserPassword1,
            login
        } = this.props;

        return (
            <Fragment>
                <Header />
                <LoginComponent
                    email={email}
                    phone={phone}
                    password={password}
                    doLogin={login}
                    setLoginEmail={setUserEmail}
                    setLoginPhone={setUserPhone}
                    setLoginPassword={setUserPassword1}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => {
    const { email, phone, password } = state.user.user;

    return {
        email,
        phone,
        password
    };
}

const mapDispatchToProps = (
    dispatch: Dispatch<Action<SwatkatsActionType>>
): DispatchProps => bindActionCreators({
    setUserEmail,
    setUserPhone,
    setUserPassword1,
    login
},
    dispatch
);

export const LoginContainer = connect<StateProps, DispatchProps, {}, {}>(
    mapStateToProps,
    mapDispatchToProps
)(Login);

