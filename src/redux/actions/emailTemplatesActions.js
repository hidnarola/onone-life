import axios from "axios";
import { ADD_TEMPLATE } from "./index";
import { BASE_URL } from "../../constants/Constants";

export const addTemplate = (type, data) => async (dispatch) => {
  const obj = {
    type,
    body: data,
  };
  const res = await axios.post(`${BASE_URL}/admin/template/add_template`, obj);
  console.log("res: ", res);

  dispatch({
    type: ADD_TEMPLATE,
    payload: { addTemplateMessage: res.data.message },
  });
};
