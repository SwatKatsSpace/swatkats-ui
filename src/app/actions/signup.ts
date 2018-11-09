import { SwatkatsActionType, SwatkatsActionCreator } from "./types";

export const fetchUser = async (): Promise<UserResponse> => {
  return fetch(`http://localhost:8080/swatkats/user`).then(response => response.json());
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
