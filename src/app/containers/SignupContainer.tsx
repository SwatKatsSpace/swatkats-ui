import React, { Fragment, Component } from "react";
import { Header } from "../../base/components/Header";
import { SignupComponent } from "../components/SignupComponent";
import { SwatkatsActionType } from "../actions/types";
import { Action, Dispatch, bindActionCreators } from "redux";
import {
  setUserName,
  setUserEmail,
  setUserPhone,
  setUserAadharId,
  setUserPanId,
  setUserPassword1,
  setUserPassword2,
  createUser
} from "../actions/user";
import { connect } from "react-redux";

interface StateProps {
  name: string;
  email: string;
  phone: string;
  aadharId: string;
  panId: string;
  password: string;
}

interface DispatchProps {
  setUserName: (name: string) => void;
  setUserEmail: (email: string) => void;
  setUserPhone: (phone: string) => void;
  setUserAadharId: (aadharId: string) => void;
  setUserPanId: (panId: string) => void;
  setUserPassword1: (password1: string) => void;
  setUserPassword2: (password2: string) => void;

  createUser: () => void;
}

type Props = StateProps & DispatchProps;

class Signup extends Component<Props> {
  render() {
    const {
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
    } = this.props;

    return (
      <Fragment>
        <Header />
        <SignupComponent
          name={name}
          email={email}
          phone={phone}
          aadharId={aadharId}
          panId={panId}
          password={password}
          setUserName={setUserName}
          setUserEmail={setUserEmail}
          setUserPhone={setUserPhone}
          setUserAadharId={setUserAadharId}
          setUserPanId={setUserPanId}
          setUserPassword1={setUserPassword1}
          setUserPassword2={setUserPassword2}
          createUser={createUser}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  const { name, email, phone, aadharId, panId, password } = state.user.user;

  return {
    name,
    email,
    phone,
    aadharId,
    panId,
    password
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action<SwatkatsActionType>>
): DispatchProps =>
  bindActionCreators(
    {
      setUserName,
      setUserEmail,
      setUserPhone,
      setUserAadharId,
      setUserPanId,
      setUserPassword1,
      setUserPassword2,
      createUser
    },
    dispatch
  );

export const SignupContainer = connect<StateProps, DispatchProps, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
