import {
  SwatkatsActionType,
  SwatkatsActionCreator,
  SwatkatsAsyncActionCreator
} from "./types";
import {
  apiFetchListOfArticle,
  apiFetchArticle,
  apiCreateArticle
} from "../services/articles";

export const fetchListOfArticle = (): SwatkatsAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const listOfArticle: Array<Article> = await apiFetchListOfArticle();

  dispatch(setListOfArticle(listOfArticle));
};

export const setListOfArticle: SwatkatsActionCreator = (
  listOfArticle: Array<Article>
) => ({
  type: SwatkatsActionType.setListOfArticle,
  payload: {
    listOfArticle
  }
});

export const fetchArticle = (
  articleUuid: string
): SwatkatsAsyncActionCreator => async (dispatch, getState) => {
  const article: Article = await apiFetchArticle({ articleUuid });

  dispatch(setArticle(article));
};

export const setArticle: SwatkatsActionCreator = (article: Article) => ({
  type: SwatkatsActionType.setArticle,
  payload: {
    article
  }
});

export const createArticle = (): SwatkatsAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const state = getState();

  const article = state.article.selectedArticle;

  const response = await apiCreateArticle(article);

  console.log(response);
};

export const setArticleFirstName: SwatkatsActionCreator = (
  firstName: string
) => ({
  type: SwatkatsActionType.setArticleFirstName,
  payload: {
    firstName
  }
});

export const setArticleLastName: SwatkatsActionCreator = (
  lastName: string
) => ({
  type: SwatkatsActionType.setArticleLastName,
  payload: {
    lastName
  }
});

export const setArticleEmail: SwatkatsActionCreator = (email: string) => ({
  type: SwatkatsActionType.setArticleEmail,
  payload: {
    email
  }
});

export const setArticlePhone: SwatkatsActionCreator = (phone: string) => ({
  type: SwatkatsActionType.setArticlePhone,
  payload: {
    phone
  }
});

export const setArticleAadharId: SwatkatsActionCreator = (
  aadharId: string
) => ({
  type: SwatkatsActionType.setArticleAadharId,
  payload: {
    aadharId
  }
});

export const setArticlePanId: SwatkatsActionCreator = (panId: string) => ({
  type: SwatkatsActionType.setArticlePanId,
  payload: {
    panId
  }
});

export const setArticleImage: SwatkatsActionCreator = (image: string) => ({
  type: SwatkatsActionType.setArticleImage,
  payload: {
    image
  }
});

export const setArticleRelation: SwatkatsActionCreator = (
  relation: string
) => ({
  type: SwatkatsActionType.setArticleRelation,
  payload: {
    relation
  }
});

export const setArticleDescription: SwatkatsActionCreator = (
  description: string
) => ({
  type: SwatkatsActionType.setArticleDescription,
  payload: {
    description
  }
});

export const setArticleLikes: SwatkatsActionCreator = (likes: string) => ({
  type: SwatkatsActionType.setArticleLikes,
  payload: {
    likes
  }
});
