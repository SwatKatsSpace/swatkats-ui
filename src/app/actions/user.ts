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
  const user: User = await fetchUserInfo();

  dispatch(setName(user.name));
  dispatch(setEmail(user.email));
  dispatch(setPhone(user.phone));
  dispatch(setAadharId(user.aadharId));
};

export const setName: SwatkatsActionCreator = (name: string) => ({
  type: SwatkatsActionType.setUserName,
  payload: { name }
});

export const setEmail: SwatkatsActionCreator = (email: string) => ({
  type: SwatkatsActionType.setUserEmail,
  payload: { email }
});

export const setPhone: SwatkatsActionCreator = (phone: string) => ({
  type: SwatkatsActionType.setUserPhone,
  payload: { phone }
});

export const setAadharId: SwatkatsActionCreator = (aadharId: string) => ({
  type: SwatkatsActionType.setUserAadharId,
  payload: { aadharId }
});

export const setPanId: SwatkatsActionCreator = (panId: string) => ({
  type: SwatkatsActionType.setUserPanId,
  payload: { panId }
});
export const setPassword1: SwatkatsActionCreator = (password1: string) => ({
  type: SwatkatsActionType.setUserPassword1,
  payload: { password1 }
});
export const setPassword2: SwatkatsActionCreator = (password2: string) => ({
  type: SwatkatsActionType.setUserPassword2,
  payload: { password2 }
});

export const createUser = (): SwatkatsAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const state = getState();

  const { user } = state.user;

  const response = await saveUserDetails(user);

  console.log(response);
};
