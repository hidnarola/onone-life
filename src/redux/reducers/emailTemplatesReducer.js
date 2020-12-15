import { ADD_TEMPLATE, TEST } from "../actions/index";

const initialState = {
  addTemplateMessage: "",
};

const emailTemplatesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TEMPLATE:
      return {
        ...state,
        addTemplateMessage: payload.addTemplateMessage,
      };
    case TEST:
      break;

    default:
      return state;
  }
};

export default emailTemplatesReducer;
