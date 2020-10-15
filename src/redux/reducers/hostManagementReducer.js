import { GET_EXPERTS_DATA } from "../actions/index";

const initialState = {
  hostData: [],
};

const hostManagementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EXPERTS_DATA:
      return {
        ...state,
        hostData: payload,
      };
    case "APPROVE_REQUEST":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default hostManagementReducer;
