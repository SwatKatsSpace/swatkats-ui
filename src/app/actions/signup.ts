import {
  SwatkatsActionType,
  SwatkatsActionCreator,
  SwatkatsAsyncActionCreator
} from "./types";
import { fetchUserInfo } from "../services/signup";

export const fetchUser = (): SwatkatsAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const userResponse: UserResponse = await fetchUserInfo();
  console.log(userResponse);
};

export const setUserName: SwatkatsActionCreator = (name: string) => ({
  type: SwatkatsActionType.setUserName,
  payload: {
    name
  }
});

export const setUserEmail: SwatkatsActionCreator = (email: string) => ({
  type: SwatkatsActionType.setUserEmail,
  payload: {
    email
  }
});

export const setUserPhone: SwatkatsActionCreator = (phone: string) => ({
  type: SwatkatsActionType.setUserPhone,
  payload: {
    phone
  }
});

export const setUserAadharId: SwatkatsActionCreator = (aadharId: string) => ({
  type: SwatkatsActionType.setUserAadharId,
  payload: {
    aadharId
  }
});
