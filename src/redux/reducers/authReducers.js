import { LOGIN } from "../actions/index";

const initialState = {
  authData: [],
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        authData: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
