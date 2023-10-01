import { Action } from "../actions";
import { ActionTypes } from "./ActionTypes";

interface AuthState {
  isAuth: boolean;
  authData: SignInResponse;
}

const initalState: AuthState = {
  isAuth: false,
  authData: {
    message: "",
    statusCode: 0,
    user: {
      email: "",
      firstName: "",
      lastName: "",
    },
  },
};

export const authReducer = (state = initalState, action: Action) => {
  switch (action.type) {
    case ActionTypes.IS_AUTHENTICATED:
      return {
        ...state,
        isAuth: action.payload,
      };
    case ActionTypes.SET_AUTH_DATA:
      return {
        ...state,
        authData: action.payload,
      };
    default:
      return state;
  }
};
