import {
  SwatkatsActionType,
  SwatkatsActionCreator,
  SwatkatsAsyncActionCreator
} from "./types";
import { fetchUserInfo, saveUserDetails } from "../services/signup";
import { loginService } from "../services/login";

export const fetchUser = (): SwatkatsAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const user: User = await fetchUserInfo();

  dispatch(setUserName(user.name));
  dispatch(setUserEmail(user.email));
  dispatch(setUserPhone(user.phone));
  dispatch(setUserAadharId(user.aadharId));
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

export const setUserPanId: SwatkatsActionCreator = (panId: string) => ({
  type: SwatkatsActionType.setUserPanId,
  payload: {
    panId
  }
});
export const setUserPassword1: SwatkatsActionCreator = (password1: string) => ({
  type: SwatkatsActionType.setUserPassword1,
  payload: {
    password1
  }
});
export const setUserPassword2: SwatkatsActionCreator = (password2: string) => ({
  type: SwatkatsActionType.setUserPassword2,
  payload: {
    password2
  }
});

export const createUser = (): SwatkatsAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const state = getState();

  const user = state.user.user;

  const response = await saveUserDetails(user);

  console.log(response);
};


export const login = (): SwatkatsAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const state = getState();
  const { email, phone, password } = state.user.user;
  const response = await loginService({ email, phone, password });
  console.log(response);
};
