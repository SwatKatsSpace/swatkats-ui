import React, { Fragment, Component } from "react";
import { Header } from "../../../base/components/Header";
import { SwatkatsActionType } from "../../actions/types";
import { Action, Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setAadharId,
  setPanId,
  setImage,
  setRelation,
  setDescription,
  setLikes,
  create
} from "../../actions/article";
import { ArticleCreateComponent } from "../../components/ArticleCreateComponent";
import "./ArticleCreateContainer.css";

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
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setAadharId: (aadharId: string) => void;
  setPanId: (panId: string) => void;
  setImage: (image: string) => void;
  setRelation: (relation: string) => void;
  setDescription: (description: string) => void;
  setLikes: (likes: string) => void;
  create: () => void;
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
      setFirstName,
      setLastName,
      setEmail,
      setPhone,
      setAadharId,
      setPanId,
      setImage,
      setRelation,
      setDescription,
      setLikes,
      create
    } = this.props;

    return (
      <Fragment>
        <Header />
        <div className="article-create-container">
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
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPhone={setPhone}
            setAadharId={setAadharId}
            setPanId={setPanId}
            setImage={setImage}
            setRelation={setRelation}
            setDescription={setDescription}
            setLikes={setLikes}
            create={create}
          />
        </div>
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
      setFirstName,
      setLastName,
      setEmail,
      setPhone,
      setAadharId,
      setPanId,
      setImage,
      setRelation,
      setDescription,
      setLikes,
      create
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
