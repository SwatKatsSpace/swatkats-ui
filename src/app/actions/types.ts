import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

export enum SwatkatsActionType {
  setUserName = "@swatkats/setusername",
  setUserEmail = "@swatkats/setUserEmail",
  setUserPhone = "@swatkats/setUserPhone",
  setUserAadharId = "@swatkats/setUserAadharId",
  setListOfArticle = "@swatkats/setListOfArticle",
  setArticle = "@swatkats/setArticle"
}

export interface SwatkatsAction extends Action<SwatkatsActionType> {
  payload: {
    [key: string]: any;
  };
}

export type SwatkatsActionCreator = ActionCreator<SwatkatsAction>;

export type SwatkatsAsyncActionCreator = ThunkAction<
  void,
  AppState,
  void,
  SwatkatsAction
>;
