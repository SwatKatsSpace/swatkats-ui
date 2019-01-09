import {
  SwatkatsActionType,
  SwatkatsActionCreator,
  SwatkatsAsyncActionCreator
} from "./types";
import { apiFetchListOfArticle, apiFetchArticle } from "../services/articles";

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
