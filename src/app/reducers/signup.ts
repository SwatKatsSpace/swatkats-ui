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
    case SwatkatsActionType.setUserEmail:
      return { ...state, name: action.payload.email };
    case SwatkatsActionType.setUserPhone:
      return { ...state, name: action.payload.phone };
    case SwatkatsActionType.setUserAadharId:
      return { ...state, name: action.payload.aadharId };
  }
  return state;
};
