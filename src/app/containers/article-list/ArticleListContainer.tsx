import React, { Fragment, Component } from "react";
import { Header } from "../../../base/components/Header";
import { ArticleListComponent } from "../../components/ArticleListComponent";
import { SwatkatsActionType } from "../../actions/types";
import { Action, Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchListOfArticle } from "../../actions/article";
import { Message } from "semantic-ui-react";
import "./ArticleListContainer.css";

interface StateProps {
  listOfArticle: Array<Article>;
}

interface DispatchProps {
  fetchListOfArticle: () => void;
}

type Props = StateProps & DispatchProps;

class ArticleList extends Component<Props> {
  componentDidMount() {
    this.props.fetchListOfArticle();
  }

  render() {
    const { listOfArticle } = this.props;

    return (
      <Fragment>
        <Header />
        <div className="article-list-container">
          {listOfArticle.length > 0 ? (
            <ArticleListComponent listOfArticle={listOfArticle} />
          ) : (
            <Message
              size="large"
              icon="warning"
              header="Cannot establish connection to server?"
              content="Make sure your backend server and internet is up"
            />
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  const { article } = state;
  const listOfArticle = article.listOfArticle;

  return {
    listOfArticle
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action<SwatkatsActionType>>
): DispatchProps =>
  bindActionCreators(
    {
      fetchListOfArticle
    },
    dispatch
  );

export const ArticleListContainer = connect<StateProps, DispatchProps, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);
