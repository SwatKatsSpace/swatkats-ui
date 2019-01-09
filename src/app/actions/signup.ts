import {
  SwatkatsActionType,
  SwatkatsActionCreator,
  SwatkatsAsyncActionCreator
} from "./types";
import { fetchUserInfo, saveUserDetails } from "../services/signup";

export const fetchUser = (): SwatkatsAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const userResponse: UserResponse = await fetchUserInfo();
  dispatch(setUserName("ayush"));
  dispatch(setUserEmail("ss"));
  dispatch(setUserPhone("sass"));
  dispatch(setUserAadharId("aassa"));
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

export const save = (): SwatkatsAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const state = getState();
  const user = state.user;
  const userResponse: UserResponse = await saveUserDetails(user);
  console.log(userResponse);
};
