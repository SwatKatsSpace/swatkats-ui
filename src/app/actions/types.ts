import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

export enum SwatkatsActionType {
  setUserName = "@swatkats/setusername",
  setUserEmail = "@swatkats/setUserEmail",
  setUserPhone = "@swatkats/setUserPhone",
  setUserAadharId = "@swatkats/setUserAadharId",
  setUserPanId = "@swatkats/setUserPanId",
  setUserPassword1 = "@swatkats/setUserPassword1",
  setUserPassword2 = "@swatkats/setUserPassword2",
  setUser = "@swatkats/setUser",

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
