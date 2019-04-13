import React, { Fragment, Component } from "react";
import { Header } from "../../../base/components/Header";
import { SignupComponent } from "../../components/SignupComponent";
import { SwatkatsActionType } from "../../actions/types";
import { Action, Dispatch, bindActionCreators } from "redux";
import {
  setName,
  setEmail,
  setPhone,
  setAadharId,
  setPanId,
  setPassword1,
  setPassword2,
  createUser
} from "../../actions/user";
import { connect } from "react-redux";
import "./SignupContainer.css";

interface StateProps {
  name: string;
  email: string;
  phone: string;
  aadharId: string;
  panId: string;
  password: string;
}

interface DispatchProps {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setAadharId: (aadharId: string) => void;
  setPanId: (panId: string) => void;
  setPassword1: (password1: string) => void;
  setPassword2: (password2: string) => void;

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
      setName,
      setEmail,
      setPhone,
      setAadharId,
      setPanId,
      setPassword1,
      setPassword2,
      createUser
    } = this.props;

    return (
      <Fragment>
        <Header isLoggedIn={false} name="" />
        <div className="signup-container">
          <SignupComponent
            name={name}
            email={email}
            phone={phone}
            aadharId={aadharId}
            panId={panId}
            password={password}
            setUserName={setName}
            setUserEmail={setEmail}
            setUserPhone={setPhone}
            setUserAadharId={setAadharId}
            setUserPanId={setPanId}
            setUserPassword1={setPassword1}
            setUserPassword2={setPassword2}
            createUser={createUser}
          />
        </div>
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
      setName,
      setEmail,
      setPhone,
      setAadharId,
      setPanId,
      setPassword1,
      setPassword2,
      createUser
    },
    dispatch
  );

export const SignupContainer = connect<StateProps, DispatchProps, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
