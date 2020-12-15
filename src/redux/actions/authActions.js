import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILED, CLEAR_STORE } from "./index";
import { BASE_URL } from "../../constants/Constants";

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["x-access-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-access-token"];
  }
}

export const logIn = (email, password, token) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/admin_login`, {
      email: email,
      password: password,
      googleRecaptchaToken: token,
    });
    console.log("res: ", res.data);

    if (res.data.token) {
      localStorage.setItem("AUTHTOKEN", res.data.token);
      setAuthorizationToken(res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: LOGIN_FAILED,
        payload: { errorMessage: res.message },
        // payload: { errorMessage: "Invalid Username/Password" },
      });
    }
  } catch (error) {
    // console.log("Error", error.response.data);
    dispatch({
      type: LOGIN_FAILED,
      payload: { errorMessage: error.response.data.message },
      // payload: { errorMessage: "Something went wrong" },
    });
  }
};

export const logOut = () => async (dispatch) => {
  setAuthorizationToken(null);
  localStorage.clear();
  dispatch({
    type: CLEAR_STORE,
  });
};
