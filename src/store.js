import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

const initialState = {
  sidebarShow: "responsive",
};

const middleware = [thunk];

// const changeState = (state = initialState, { type, ...rest }) => {
//   console.log("Rest: ", rest);
//   switch (type) {
//     case "set":
//       return { ...state, ...rest };
//     default:
//       return state;
//   }
// };

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

// const store = createStore(changeState);
export default store;
