import { GET_MEMBERS_DATA } from "../actions/index";

const initialState = {
  memberData: [],
  dataLoaded: false,
};

const memberManagementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MEMBERS_DATA:
      return {
        ...state,
        memberData: payload.memberData,
        pages: payload.pages,
        dataLoaded: payload.dataLoaded,
      };

    default:
      return state;
  }
};

export default memberManagementReducer;
