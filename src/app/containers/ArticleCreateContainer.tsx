import React, { Fragment, Component } from "react";
import { Header } from "../../base/components/Header";
import { SwatkatsActionType } from "../actions/types";
import { Action, Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  setArticleFirstName,
  setArticleLastName,
  setArticleEmail,
  setArticlePhone,
  setArticleAadharId,
  setArticlePanId,
  setArticleImage,
  setArticleRelation,
  setArticleDescription,
  setArticleLikes,
  createArticle
} from "../actions/article";
import { ArticleCreateComponent } from "../components/ArticleCreateComponent";

interface StateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  aadharId: string;
  panId: string;
  image: string;
  relation: string;
  description: string;
  likes: string;
}

interface DispatchProps {
  setArticleFirstName: (firstName: string) => void;
  setArticleLastName: (lastName: string) => void;
  setArticleEmail: (email: string) => void;
  setArticlePhone: (phone: string) => void;
  setArticleAadharId: (aadharId: string) => void;
  setArticlePanId: (panId: string) => void;
  setArticleImage: (image: string) => void;
  setArticleRelation: (relation: string) => void;
  setArticleDescription: (description: string) => void;
  setArticleLikes: (likes: string) => void;
  createArticle: () => void;
}

type Props = StateProps & DispatchProps;

class ArticleCreateSubContainer extends Component<Props> {
  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      aadharId,
      panId,
      image,
      relation,
      description,
      likes,
      setArticleFirstName,
      setArticleLastName,
      setArticleEmail,
      setArticlePhone,
      setArticleAadharId,
      setArticlePanId,
      setArticleImage,
      setArticleRelation,
      setArticleDescription,
      setArticleLikes,
      createArticle
    } = this.props;

    return (
      <Fragment>
        <Header />
        <ArticleCreateComponent
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          aadharId={aadharId}
          panId={panId}
          image={image}
          relation={relation}
          description={description}
          likes={likes}
          setArticleFirstName={setArticleFirstName}
          setArticleLastName={setArticleLastName}
          setArticleEmail={setArticleEmail}
          setArticlePhone={setArticlePhone}
          setArticleAadharId={setArticleAadharId}
          setArticlePanId={setArticlePanId}
          setArticleImage={setArticleImage}
          setArticleRelation={setArticleRelation}
          setArticleDescription={setArticleDescription}
          setArticleLikes={setArticleLikes}
          createArticle={createArticle}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  const { article } = state;
  const {
    firstName,
    lastName,
    email,
    phone,
    aadharId,
    panId,
    image,
    relation,
    description,
    likes
  } = article.selectedArticle;

  return {
    firstName,
    lastName,
    email,
    phone,
    aadharId,
    panId,
    image,
    relation,
    description,
    likes
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action<SwatkatsActionType>>
): DispatchProps =>
  bindActionCreators(
    {
      setArticleFirstName,
      setArticleLastName,
      setArticleEmail,
      setArticlePhone,
      setArticleAadharId,
      setArticlePanId,
      setArticleImage,
      setArticleRelation,
      setArticleDescription,
      setArticleLikes,
      createArticle
    },
    dispatch
  );

export const ArticleCreateContainer = connect<
  StateProps,
  DispatchProps,
  {},
  {}
>(
  mapStateToProps,
  mapDispatchToProps
)(ArticleCreateSubContainer);
