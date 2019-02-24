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

export const create = (): SwatkatsAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const state = getState();

  const article = state.article.selectedArticle;

  const response = await apiCreateArticle(article);

  console.log(response);
};

export const setArticle: SwatkatsActionCreator = (article: Article) => ({
  type: SwatkatsActionType.setArticle,
  payload: {
    article
  }
});

export const setFirstName: SwatkatsActionCreator = (firstName: string) => ({
  type: SwatkatsActionType.setArticleFirstName,
  payload: {
    firstName
  }
});

export const setIsPaymentModalOpen: SwatkatsActionCreator = () => ({
  type: SwatkatsActionType.setIsPaymentModalOpen,
  payload: {}
});

export const setPaymentValue: SwatkatsActionCreator = (value: number) => ({
  type: SwatkatsActionType.setPaymentValue,
  payload: { value }
});

export const setPaymentError: SwatkatsActionCreator = (error: string) => ({
  type: SwatkatsActionType.setPaymentError,
  payload: { error }
});

export const setLastName: SwatkatsActionCreator = (lastName: string) => ({
  type: SwatkatsActionType.setArticleLastName,
  payload: {
    lastName
  }
});

export const setEmail: SwatkatsActionCreator = (email: string) => ({
  type: SwatkatsActionType.setArticleEmail,
  payload: {
    email
  }
});

export const setPhone: SwatkatsActionCreator = (phone: string) => ({
  type: SwatkatsActionType.setArticlePhone,
  payload: {
    phone
  }
});

export const setAadharId: SwatkatsActionCreator = (aadharId: string) => ({
  type: SwatkatsActionType.setArticleAadharId,
  payload: {
    aadharId
  }
});

export const setPanId: SwatkatsActionCreator = (panId: string) => ({
  type: SwatkatsActionType.setArticlePanId,
  payload: {
    panId
  }
});

export const setImage: SwatkatsActionCreator = (image: string) => ({
  type: SwatkatsActionType.setArticleImage,
  payload: {
    image
  }
});

export const setRelation: SwatkatsActionCreator = (relation: string) => ({
  type: SwatkatsActionType.setArticleRelation,
  payload: {
    relation
  }
});

export const setDescription: SwatkatsActionCreator = (description: string) => ({
  type: SwatkatsActionType.setArticleDescription,
  payload: {
    description
  }
});

export const setLikes: SwatkatsActionCreator = (likes: string) => ({
  type: SwatkatsActionType.setArticleLikes,
  payload: {
    likes
  }
});
