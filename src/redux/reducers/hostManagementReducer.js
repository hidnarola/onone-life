import { GET_EXPERTS_DATA } from "../actions/index";

const initialState = {
  hostData: [],
};

const hostManagementReducer = (state = initialState, { type, payload, pages, loading, inProgressRequest, pendingPequest, approvedRequest }) => {
  switch (type) {
    case GET_EXPERTS_DATA:
      console.log("Payload: ", payload)
      return {
        ...state,
        hostData: payload,
        pages,
        loading,
        inProgressRequest,
        pendingPequest,
        approvedRequest
      };
      default:
      return state;
  }
};

export default hostManagementReducer;
