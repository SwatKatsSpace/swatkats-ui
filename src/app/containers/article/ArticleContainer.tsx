import React, { Fragment, Component } from "react";
import { Header } from "../../../base/components/Header";
import { ArticleComponent } from "../../components/article/ArticleComponent";
import { SwatkatsActionType } from "../../actions/types";
import { Action, Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchArticle, setIsPaymentModalOpen } from "../../actions/article";
import { withRouter, RouteComponentProps } from "react-router";
import "./ArticleContainer.css";

interface StateProps {
  selectedArticle: Article;
  isPaymentModalOpen: boolean;
}

interface DispatchProps {
  fetchArticle: (articleUuid: string) => void;
  setIsPaymentModalOpen: () => void;
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
      setIsPaymentModalOpen
    } = this.props;
    return (
      <Fragment>
        <Header />
        <div className="article-container">
          <ArticleComponent
            selectedArticle={selectedArticle}
            isPaymentModalOpen={isPaymentModalOpen}
            setIsPaymentModalOpen={setIsPaymentModalOpen}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  const { article } = state;
  const selectedArticle = article.selectedArticle;
  const isPaymentModalOpen = article.isPaymentModalOpen;

  return {
    selectedArticle,
    isPaymentModalOpen
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action<SwatkatsActionType>>
): DispatchProps =>
  bindActionCreators({ fetchArticle, setIsPaymentModalOpen }, dispatch);

export const ArticleContainer = withRouter(
  connect<StateProps, DispatchProps, OwnProps, {}>(
    mapStateToProps,
    mapDispatchToProps
  )(ArticleSubContainer)
);
