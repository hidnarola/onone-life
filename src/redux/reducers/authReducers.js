import { LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/index";

const initialState = {
  authData: [],
  errorMessage: null,
  isLoggedIn: false,
  forgotPasswordMessage: "",
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      console.log("Payload", payload);
      return {
        ...state,
        authData: payload,
        errorMessage: null,
        isLoggedIn: true,
        loggedInToken: payload.token,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        errorMessage: payload.errorMessage,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
