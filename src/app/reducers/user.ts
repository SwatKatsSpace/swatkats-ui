import { SwatkatsAction, SwatkatsActionType } from "../actions/types";

const USER_DEFAULT_STATE: UserState = {
  loading: false,
  error: false,
  user: {
    name: "",
    email: "",
    phone: "",
    aadharId: "",
    panId: "",
    password: ""
  },
  isLoggedIn: false
};

export const user = (
  state = USER_DEFAULT_STATE,
  action: SwatkatsAction
): UserState => {
  switch (action.type) {
    case SwatkatsActionType.setUserName:
      return { ...state, user: { ...state.user, name: action.payload.name } };
    case SwatkatsActionType.setUserEmail:
      return { ...state, user: { ...state.user, email: action.payload.email } };
    case SwatkatsActionType.setUserPhone:
      return { ...state, user: { ...state.user, phone: action.payload.phone } };
    case SwatkatsActionType.setUserAadharId:
      return {
        ...state,
        user: { ...state.user, aadharId: action.payload.aadharId }
      };
    case SwatkatsActionType.setUserPanId:
      return { ...state, user: { ...state.user, panId: action.payload.panId } };
    case SwatkatsActionType.setUserPassword1:
      return {
        ...state,
        user: { ...state.user, password: action.payload.password1 }
      };
    case SwatkatsActionType.setUserPassword2:
      if (state.user.password !== action.payload.password2) {
        return { ...state, error: true };
      }
    case SwatkatsActionType.setLoginStatus:
      return { ...state, isLoggedIn: action.payload.status };
  }
  return state;
};
