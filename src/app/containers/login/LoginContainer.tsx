import React, { Fragment, Component } from "react";
import { Header } from "../../../base/components/Header";
import { LoginComponent } from "../../components/LoginComponent";
import { SwatkatsActionType } from "../../actions/types";
import { Action, Dispatch, bindActionCreators } from "redux";
import "./LoginContainer.css";

import { setEmail, setPhone, setPassword1 } from "../../actions/user";

import { connect } from "react-redux";
import { login } from "src/app/actions/login";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface StateProps {
  email: string;
  phone: string;
  password: string;
  isLoggedIn: boolean;
}

interface DispatchProps {
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setPassword1: (password: string) => void;
  login: () => void;
}

interface OwnProps extends RouteComponentProps {}

type Props = StateProps & DispatchProps & OwnProps;

class Login extends Component<Props> {
  componentDidUpdate() {
    const { isLoggedIn, history } = this.props;

    if (isLoggedIn) {
      history.push("/list");
    }
  }

  render() {
    const {
      email,
      phone,
      password,
      setEmail,
      setPhone,
      setPassword1,
      login,
      // isLoggedIn
    } = this.props;

    return (
      <Fragment>
        <Header isLoggedIn={false} name="" />
        <div className="login-container">
          <LoginComponent
            email={email}
            phone={phone}
            password={password}
            setLoginEmail={setEmail}
            setLoginPhone={setPhone}
            setLoginPassword={setPassword1}
            login={login}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  const {
    user: { email, phone, password },
    isLoggedIn
  } = state.user;

  return {
    email,
    phone,
    password,
    isLoggedIn
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action<SwatkatsActionType>>
): DispatchProps =>
  bindActionCreators(
    {
      setEmail,
      setPhone,
      setPassword1,
      login
    },
    dispatch
  );

export const LoginContainer = withRouter(
  connect<StateProps, DispatchProps, OwnProps, {}>(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
