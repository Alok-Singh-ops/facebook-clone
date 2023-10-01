import { ActionTypes } from "../reducers/ActionTypes";

interface AuthAction {
  type: string;
  payload: boolean;
}
interface AuthDataAction {
  type: string;
  payload: SignInResponse;
}

export type Action = AuthAction | AuthDataAction;

export const setIsAuth = (isAuth: boolean): Action => ({
  type: ActionTypes.IS_AUTHENTICATED,
  payload: isAuth,
});

export const setAuthData = (authData: SignInResponse): Action => ({
  type: ActionTypes.SET_AUTH_DATA,
  payload: authData,
});
