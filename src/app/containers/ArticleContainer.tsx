import React, { Fragment, Component } from "react";
import { Header } from "../../base/components/Header";
import { ArticleComponent } from "../components/ArticleComponent";
import { SwatkatsActionType } from "../actions/types";
import { Action, Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchArticle } from "../actions/article";
import { withRouter, RouteComponentProps } from "react-router";

interface StateProps {
  selectedArticle: Article;
}

interface DispatchProps {
  fetchArticle: (articleUuid: string) => void;
}

interface OwnProps extends RouteComponentProps<{ articleUuid: string }> {}

type Props = StateProps & DispatchProps & OwnProps;

class ArticleSubContainer extends Component<Props> {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.articleUuid);
  }

  render() {
    const { selectedArticle } = this.props;
    return (
      <Fragment>
        <Header />
        <ArticleComponent selectedArticle={selectedArticle} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  const { article } = state;
  const selectedArticle = article.selectedArticle;

  return {
    selectedArticle
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action<SwatkatsActionType>>
): DispatchProps => bindActionCreators({ fetchArticle }, dispatch);

export const ArticleContainer = withRouter(
  connect<StateProps, DispatchProps, OwnProps, {}>(
    mapStateToProps,
    mapDispatchToProps
  )(ArticleSubContainer)
);
