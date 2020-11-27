import {
  GET_EXPERTS_DATA,
  APPROVE_PENDING_REQUEST,
  ADD_NOTES,
} from "../actions/index";

const initialState = {
  hostData: [],
  dataLoaded: false,
};

const hostManagementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EXPERTS_DATA:
      return {
        ...state,
        hostData: payload.hostData,
        pages: payload.pages,
        dataLoaded: payload.dataLoaded,
        inProgressRequest: payload.inProgressRequest,
        pendingPequest: payload.pendingPequest,
        approvedRequest: payload.approvedRequest,
      };
    case APPROVE_PENDING_REQUEST:
      return {
        ...state,
        approveRequestMessage: payload.approveRequestMessage,
      };
    case ADD_NOTES:
      return {
        ...state,
        addNotesMessage: payload.addNotesMessage,
      };
    default:
      return state;
  }
};

export default hostManagementReducer;
