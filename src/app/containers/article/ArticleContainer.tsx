import React, { Fragment, Component } from "react";
import { Header } from "../../../base/components/Header";
import { ArticleComponent } from "../../components/article/ArticleComponent";
import { SwatkatsActionType } from "../../actions/types";
import { Action, Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  fetchArticle,
  setIsPaymentModalOpen,
  setPaymentValue,
  setPaymentError
} from "../../actions/article";
import { withRouter, RouteComponentProps } from "react-router";
import "./ArticleContainer.css";

interface StateProps {
  selectedArticle: Article;
  isPaymentModalOpen: boolean;
  paymentValue: number;
  paymentError: string;
}

interface DispatchProps {
  fetchArticle: (articleUuid: string) => void;
  setIsPaymentModalOpen: () => void;
  setPaymentValue: (value: number) => void;
  setPaymentError: (error: string) => void;
}

interface OwnProps extends RouteComponentProps<{ articleUuid: string }> {}

type Props = StateProps & DispatchProps & OwnProps;

class ArticleSubContainer extends Component<Props> {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.articleUuid);
  }

  render() {
    const {
      selectedArticle,
      isPaymentModalOpen,
      setIsPaymentModalOpen,
      paymentValue,
      paymentError,
      setPaymentValue,
      setPaymentError
    } = this.props;
    return (
      <Fragment>
        <Header isLoggedIn={false} name="" />
        <div className="article-container">
          <ArticleComponent
            selectedArticle={selectedArticle}
            isPaymentModalOpen={isPaymentModalOpen}
            setIsPaymentModalOpen={setIsPaymentModalOpen}
            paymentValue={paymentValue}
            paymentError={paymentError}
            setPaymentValue={setPaymentValue}
            setPaymentError={setPaymentError}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  const { article } = state;
  const selectedArticle = article.selectedArticle;
  const { isPaymentModalOpen, value, error } = article.payment;

  return {
    selectedArticle,
    isPaymentModalOpen,
    paymentValue: value,
    paymentError: error
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action<SwatkatsActionType>>
): DispatchProps =>
  bindActionCreators(
    { fetchArticle, setIsPaymentModalOpen, setPaymentValue, setPaymentError },
    dispatch
  );

export const ArticleContainer = withRouter(
  connect<StateProps, DispatchProps, OwnProps, {}>(
    mapStateToProps,
    mapDispatchToProps
  )(ArticleSubContainer)
);
