import { combineReducers } from "redux";
import authReducer from "./authReducers";
import hostManagementReducer from "./hostManagementReducer";

export default combineReducers({
  hostManagement: hostManagementReducer,
  auth: authReducer,
});
