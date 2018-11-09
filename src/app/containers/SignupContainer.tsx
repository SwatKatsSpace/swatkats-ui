import React, { Fragment, Component } from "react";
import { Header } from "../../base/components/Header";
import { SignupComponent } from "../components/SignupComponent";
import { SwatkatsActionType } from "../actions/types";
import { Action, Dispatch, bindActionCreators } from "redux";
import { setUserName } from "../actions/signup";
import { connect } from "react-redux";

interface StateProps {
  name: string;
  email: string;
  phone: string;
  aadharId: string;
}

interface DispatchProps {
  setUserName: (name: string) => void;
}

type Props = StateProps & DispatchProps;

class Signup extends Component<Props> {
  render() {
    const { name, email, phone, aadharId, setUserName } = this.props;

    return (
      <Fragment>
        <Header />
        <SignupComponent
          name={name}
          email={email}
          phone={phone}
          aadharId={aadharId}
          setUserName={setUserName}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: SignUpState): StateProps => {
  const { name, email, phone, aadharId } = state;

  return {
    name,
    email,
    phone,
    aadharId
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action<SwatkatsActionType>>
): DispatchProps => bindActionCreators({ setUserName }, dispatch);

export const SignupContainer = connect<StateProps, DispatchProps, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
