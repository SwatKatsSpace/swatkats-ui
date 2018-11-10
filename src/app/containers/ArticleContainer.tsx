import React, { Fragment, Component } from "react";
import { Header } from "../../base/components/Header";
import { ArticleComponent } from "../components/ArticleComponent";
import { SwatkatsActionType } from "../actions/types";
import { Action, Dispatch, bindActionCreators } from "redux";
import {
  setUserName,
  setUserEmail,
  setUserPhone,
  setUserAadharId,
  fetchUser
} from "../actions/signup";
import { connect } from "react-redux";

interface StateProps {
  name: string;
  email: string;
  phone: string;
  aadharId: string;
}

interface DispatchProps {
  setUserName: (name: string) => void;
  setUserEmail: (email: string) => void;
  setUserPhone: (phone: string) => void;
  setUserAadharId: (aadharId: string) => void;
  fetchUser: () => void;
}

type Props = StateProps & DispatchProps;

class Article extends Component<Props> {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <ArticleComponent />
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
): DispatchProps =>
  bindActionCreators(
    { setUserName, setUserEmail, setUserPhone, setUserAadharId, fetchUser },
    dispatch
  );

export const ArticleContainer = connect<StateProps, DispatchProps, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Article);