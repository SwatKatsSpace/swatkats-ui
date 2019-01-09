import {
  SwatkatsActionType,
  SwatkatsActionCreator,
  SwatkatsAsyncActionCreator
} from "./types";
import { apiFetchListOfArticle } from "../services/articles";

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
