import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

export enum SwatkatsActionType {
  setUserName,
  setUserEmail,
  setUserPhone,
  setUseraadharId
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
