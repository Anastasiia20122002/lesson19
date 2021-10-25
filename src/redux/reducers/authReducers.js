import { authActions } from "../actionTypes";

const initialState = {
  isAuth: false,
  error: "",
};
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case authActions.AUTH_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
      };
    case authActions.AUTH_USER_FAILED:
      return {
        ...state,
        isAuth: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
