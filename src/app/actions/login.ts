import {
    SwatkatsActionType,
    SwatkatsActionCreator,
    SwatkatsAsyncActionCreator
} from "./types";

import {loginService} from "../services/login";

export const setLoginEmail: SwatkatsActionCreator = (email: string) => ({
    type: SwatkatsActionType.setUserEmail,
    payload: {
        email
    }
});

export const setLoginPhone: SwatkatsActionCreator = (phone: string) => ({
    type : SwatkatsActionType.setUserPhone,
    payload: {
        phone
    }
});

export const setLoginPassword: SwatkatsActionCreator = (password: string) => ({
    type : SwatkatsActionType.setUserPassword1,
    payload: {
        password
    }
});

export const doLogin = (): SwatkatsAsyncActionCreator => async (
    dispatch,
    getState
) => {
    const state = getState();
    const user = state.user.user;
    const response = await loginService(user);
    console.log(response);
};

