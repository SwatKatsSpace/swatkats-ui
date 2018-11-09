import {
  SwatkatsActionType,
  SwatkatsActionCreator
} from "./types";

export const setUserName: SwatkatsActionCreator = (name: string) => ({
  type: SwatkatsActionType.setUserName,
  payload: {
    name
  }
});
