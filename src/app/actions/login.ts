import {
  SwatkatsAsyncActionCreator,
  SwatkatsActionCreator,
  SwatkatsActionType
} from "./types";
import { apiLoginUsingEmail, apiLoginUsingPhone } from "../services/login";
import { validatePhoneNumber, validateEmail } from "../validators";
import { setName } from "./user";

export const login = (): SwatkatsAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const state = getState();
  const { email, password } = state.user.user;

  if (!Boolean(email) || !Boolean(password)) {
    return;
  }

  const isEmail = validateEmail(email);
  const isPhoneNumber = validatePhoneNumber(email);

  if (isEmail || isPhoneNumber) {
    const response: TokenWrapper = isEmail
      ? await apiLoginUsingEmail({ email, password })
      : await apiLoginUsingPhone({ email, password });

    const jwToken = response.token;

    if (Boolean(jwToken)) {
      const { user } = response;
      dispatch(setName(user.name));
      dispatch(setLoginStatus(true));
    }
  }
};

const setLoginStatus: SwatkatsActionCreator = (status: boolean) => ({
  type: SwatkatsActionType.setLoginStatus,
  payload: { status }
});
