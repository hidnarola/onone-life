import { GET_VERIFICATION_LIST } from "../actions/index";

const initialState = {
  hostData: [],
  dataLoaded: false,
  countries: [],
};

const verificationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VERIFICATION_LIST:
      return {
        ...state,
        verificationData: payload.verificationData,
        pages: payload.pages,
        dataLoaded: payload.dataLoaded,
        // inProgressRequest: payload.inProgressRequest,
        // pendingPequest: payload.pendingPequest,
        // approvedRequest: payload.approvedRequest,
        // totalRequest: payload.totalRequest,
      };

    default:
      return state;
  }
};

export default verificationsReducer;
