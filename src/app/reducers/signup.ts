import { SwatkatsAction, SwatkatsActionType } from "../actions/types";

const SIGNUP_DEFAULT_STATE: SignUpState = {
  name: "",
  email: "",
  phone: "",
  aadharId: ""
};

export const signup = (
  state = SIGNUP_DEFAULT_STATE,
  action: SwatkatsAction
): SignUpState => {
  switch (action.type) {
    case SwatkatsActionType.setUserName:
      return { ...state, name: action.payload.name };
  }
  return state;
};
