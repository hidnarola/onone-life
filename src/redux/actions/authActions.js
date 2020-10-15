import axios from "axios";
import { LOGIN } from "./index";
import { BASE_URL } from "../../constants/Constants";

export const logIn = (email, password) => async (dispatch) => {
  const res = await axios.post(`${BASE_URL}/login`, {
    email: email,
    password: password,
  });
  console.log(res);
  if (res.data.token) {
    localStorage.setItem("AUTHTOKEN", JSON.stringify(res.data.token));
    window.location.href = "/dashboard";
  } else {
    console.log(res.message);
  }
  dispatch({
    type: LOGIN,
    payload: res.data,
  });
};
