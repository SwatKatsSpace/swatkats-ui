import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

export enum SwatkatsActionType {
  setUserName = "@swatkats/setusername",
  setUserEmail = "@swatkats/setUserEmail",
  setUserPhone = "@swatkats/setUserPhone",
  setUserAadharId = "@swatkats/setUserAadharId",
}

export interface SwatkatsAction extends Action<SwatkatsActionType> {
  payload: {
    [key: string]: any;
  };
}

export type SwatkatsActionCreator = ActionCreator<SwatkatsAction>;
export type SwatkatsAsyncActionCreator = ThunkAction<
  void,
  {},
  void,
  SwatkatsAction
>;
