import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILED, CLEAR_STORE } from "./index";
import { BASE_URL } from "../../constants/Constants";

export const logIn = (email, password, token) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/admin_login`, {
      email: email,
      password: password,
      googleRecaptchaToken: token,
    });
    console.log(res);
    if (res.data.token) {
      localStorage.setItem("AUTHTOKEN", JSON.stringify(res.data.token));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: LOGIN_FAILED,
        payload: { errorMessage: "Invalid Username/Password" },
      });
    }
  } catch (error) {
    // console.log("Error", error);
    dispatch({
      type: LOGIN_FAILED,
      payload: { errorMessage: "Something went wrong" },
    });
  }
};

export const logOut = () => async (dispatch) => {
  localStorage.clear();
  dispatch({
    type: CLEAR_STORE,
  });
};
