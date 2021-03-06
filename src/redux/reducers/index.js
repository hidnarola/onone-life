import { combineReducers } from "redux";
import authReducer from "./authReducers";
import hostManagementReducer from "./hostManagementReducer";
import memberManagementReducer from "./memberManagementReducer";
import emailTemplatesReducer from "./emailTemplatesReducer";
import verificationsReducer from "./verificationsReducer";

const appReducer = combineReducers({
  hostManagement: hostManagementReducer,
  memberManagement: memberManagementReducer,
  emailTemplates: emailTemplatesReducer,
  verifications: verificationsReducer,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_STORE") {
    state = undefined;
  }
  if (action.type === "set") {
    return { ...state, sidebarShow: action.sidebarShow };
  }

  return appReducer(state, action);
};

export default rootReducer;
